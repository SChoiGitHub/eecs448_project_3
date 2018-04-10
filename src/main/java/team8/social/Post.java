package team8.social;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.json.JSONStringer;

public class Post {
	/**
	 * Information of the Post
	 */
	private String author, message, title;

	/**
	 * Constructor of a Post object
	 * 
	 * @param inputAuthor
	 *            The username of the author of the post
	 * @param inputMessage
	 *            The message or content inside the post
	 * @param inputTitle
	 *            The title of the post
	 */
	public Post(String inputAuthor, String inputMessage, String inputTitle) {
		author = inputAuthor;
		message = inputMessage;
		title = inputTitle;
	}

	/**
	 * This method creates a new post and returns it as a new Post object.
	 * 
	 * @pre The post information to be used must be valid.
	 * @post The post is created.
	 * @param inputAuthor
	 *            The username of the author of the post
	 * @param inputMessage
	 *            The message or content inside the post
	 * @param inputTitle
	 *            The title of the post
	 * @return A new Post object representing the new post is return if everything
	 *         is valid, otherwise null
	 */
	public static Post createPost(String inputAuthor, String inputMessage, String inputTitle) {
		Database.prepareQueryParameter(inputMessage);
		Database.prepareQueryParameter(inputTitle);

		String query = ("INSERT INTO `social_posts` (`author`,`message`,`title`)" + "VALUES" + "('" + inputAuthor
				+ "','" + inputMessage + "','" + inputTitle + "');");

		if (Database.querySQLSet(query)) {
			return new Post(inputAuthor, inputMessage, inputTitle);
		} else {
			return null;
		}
	}

	/**
	 * This method creates a new post and returns it as a new Post object. This one
	 * specifically generates a reply to an existing message
	 * 
	 * @pre The post information to be used must be valid.
	 * @post The post is created.
	 * @param inputAuthor
	 *            The username of the author of the post
	 * @param inputMessage
	 *            The message or content inside the post
	 * @param inputTitle
	 *            The title of the post
	 * @param replyingToPostID
	 *            The id of the post to reply to
	 * @return A new Post object representing the new post is return if everything
	 *         is valid, otherwise null
	 */
	public static Post createPost(String inputAuthor, String inputMessage, String inputTitle, int replyingToPostID) {
		Database.prepareQueryParameter(inputMessage);
		Database.prepareQueryParameter(inputTitle);

		String query = ("INSERT INTO `social_posts`" + "(`author`," + "`message`," + "`title`," + "`parentPost`)"
				+ "VALUES" + "('" + inputAuthor + "','" + inputMessage + "','" + inputTitle + "','" + replyingToPostID
				+ "');");

		if (Database.querySQLSet(query)) {
			return new Post(inputAuthor, inputMessage, inputTitle);
		} else {
			return null;
		}
	}

	/**
	 * This method returns a javascript object that has all the post's information.
	 * 
	 * @return A JSON string that represents all the posts.
	 */
	public static String JSONAllPosts() {
		String query = "SELECT * FROM social_posts WHERE parentPost IS NULL;";
		DatabaseGetter getter = new DatabaseGetter(query);
		ResultSet rs = getter.results;
		
		String postList = "[";

		try {
			//Only the first element in the array has a comma before it
			boolean first = true;
			
			//Construct the post array.
			while (rs.next()) {
				if (first) {
					first = false;
				} else {
					postList += ",";
				}
				postList += new JSONStringer().object()
						.key("ID").value(rs.getInt("id"))
						.key("Title").value(rs.getString("title"))
						.key("Author").value(rs.getString("author"))
						.key("Reply").value(getParentCount(rs.getInt("id")))
						.endObject().toString();
			}
		} catch (Exception e) {
			System.out.println("ResultSet Error:\n\t" + e.getMessage());
		}
		
		postList += "]"; // Close it.

		return new JSONStringer().object()
				.key("Posts").value(postList)
				.endObject().toString();
	}
	/**
	 * This method returns a JS object that represents the posts that reply to a specific post given an id
	 * @param id 
	 *            The id of the parent post.
	 * @return A JSON String that contains the replies to a specific post given the id
	 */
	public static String JSONAllPostReplies(int id) {
		String query = "SELECT FROM social_posts WHERE parentPost='" + id + "'";
		DatabaseGetter getter = new DatabaseGetter(query);
		ResultSet rs = getter.results;
		
		String postList = "[";
		int totalPosts = 0;
		
		try {
			boolean first = true; //Only the first item in the array does not have a comma before it
			//Just get all the replies of a post
			while (rs.next()) {
				if (first) {
					first = false;
				} else {
					postList += ",";
				}
				totalPosts++;
				postList += new JSONStringer().object()
						.key("Author").value(rs.getString("author"))
						.key("Content").value(rs.getString("message"))
						.endObject().toString();
			}
		} catch (Exception e) {
			System.out.println("ResultSet Error:\n\t" + e.getMessage());
		}
		
		postList += "]"; // Close it.
		
		//Build the post object to return
		String postObject = new JSONStringer().object()
				.key("Current Page").value(1)
				.key("Total Pages").value(Math.max(1,totalPosts/10))
				.key("Posts").value(postList)
				.endObject().toString();
		
		return postObject;
	}
	/**
	 * This returns the number of replies a post has.
	 * 
	 * @param id
	 *            The id of the post
	 * @return The number of replies the post (associated with the id) has.
	 */
	private static int getParentCount(int id) {
		String query = "SELECT COUNT(*) FROM social_posts WHERE parentPost='" + id + "'";
		DatabaseGetter getter = new DatabaseGetter(query);
		ResultSet rs = getter.results;

		int count = 0;
		try {
			while (rs.next()) {
				count = rs.getInt("COUNT(*)");
			}
		} catch (Exception e) {
			System.out.println("ResultSet Error:\n\t" + e.getMessage());
		}

		return count;
	}

	/**
	 * This method returns a JSON representing a post using an id
	 * 
	 * @pre The post with the id exists.
	 * @param id_in
	 *            The id to input.
	 * @return JSON representing the post
	 */
	public static String getPostByID(int id_in) {
		String post = "";
		String query = "SELECT * FROM social_posts WHERE id=" + id_in + ";";
		DatabaseGetter getter = new DatabaseGetter(query);
		ResultSet rs = getter.results;

		try {
			while (rs.next()) {
				post = new JSONStringer().object()
						.key("ID").value(rs.getInt("id"))
						.key("Title").value(rs.getString("title"))
						.key("Author").value(rs.getString("author"))
						.key("Content").value(rs.getString("message"))
						.endObject().toString();
			}
		} catch (Exception e) {
			System.out.println("ResultSet Error:\n\t" + e.getMessage());
		}

		return post;
	}
}