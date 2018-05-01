 

function populatePosts(text){
	let postL = JSON.parse(text);
    let postsTable = document.getElementById("postsTable");
    
    for(let i = 0; i < postL.Posts.length; i++) {
        
        let post = document.createElement("tr");
        let title = document.createElement("td");
        let author = document.createElement("td");
        let repliesNum = document.createElement("td");
        
        let deleteButtonCol = document.createElement("td");
        let deleteButtonForm = document.createElement("form");
        let deleteButton = document.createElement("button");
        
        title.setAttribute("class", "postTitle");
        author.setAttribute("class", "postAuthor");
        repliesNum.setAttribute("class", "replyNbr");
        
        deleteButtonForm.setAttribute("action","/admin/deletePost");
        deleteButtonForm.setAttribute("method","post");
        deleteButton.setAttribute("type","submit");
        deleteButton.setAttribute("name","ID");
        deleteButton.setAttribute("value",postL.Posts[i].ID);
        deleteButton.innerHTML = "Delete Post";
        
        title.innerHTML = postL.Posts[i].Title;
        author.innerHTML = postL.Posts[i].Author;
        repliesNum.innerHTML = postL.Posts[i].Reply;
        
        post.appendChild(title);
        post.appendChild(author);
        post.appendChild(repliesNum);

        deleteButtonForm.appendChild(deleteButton);
        deleteButtonCol.appendChild(deleteButtonForm);
        post.appendChild(deleteButtonCol);
        
        postsTable.appendChild(post);
        	/**
        	 * <td class="postTitle"><a href="">Post Title</a></td>
			    <td class="postAuthor"><a href="">Author</a></td>
			    <td class="replyNbr">Replies</td>
        	 */
        
        
    }
}

function populateUsers(text){
	let list = JSON.parse(text);
    let userTable = document.getElementById("userTable");
    
    for(let i = 0; i < list.Users.length; i++) {

        let user = document.createElement("tr");
        let username = document.createElement("td");
        let href = document.createElement("a");
        let text = list["Users"][i];
        href.innerHTML = text;
        
        username.appendChild(href);
        user.appendChild(username);
        userTable.appendChild(user);
        
        
    }
}

function createList () {
	let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            populatePosts(this.responseText);
        }
    };


    xhttp1.open("GET", "/api/posts", true);
    xhttp1.send();
    

	let xhttp2 = new XMLHttpRequest(); 
	xhttp2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        	
        	populateUsers(this.responseText);
        }
    };

    xhttp2.open("GET", "/api/users", true);
    xhttp2.send();
}

createList();