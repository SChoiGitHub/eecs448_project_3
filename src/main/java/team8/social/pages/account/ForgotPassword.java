package team8.social.pages.account;

import team8.social.Account;
import team8.social.PageHandler;
import team8.social.Session;

import java.nio.file.Files;
import java.nio.file.Paths;

import static spark.Spark.get;
import static spark.Spark.post;

public class ForgotPassword implements PageHandler {
    private static String username = "";
    private static String security = "";
    private static String password = "";
    
    public ForgotPassword(){
        //Grab content of Username page
        try {
            username = new String(Files.readAllBytes(
                    Paths.get(getClass().getResource("/public/html/forgotPasswordUsernameInput.html").toURI())
            ));
        }catch(Exception e){}
        
        //Grab content of Security Questions page
        try{
            security = new String(Files.readAllBytes(
                    Paths.get(getClass().getResource("/public/html/forgotPasswordSecQuestion.html").toURI())
            ));
        }catch(Exception e){}
        
        //Grab content of reset password page
        try{
            password = new String(Files.readAllBytes(
                    Paths.get(getClass().getResource("/public/html/forgotPasswordReset.html").toURI())
            ));
        }catch(Exception e){}
    }
    
    public void pages() {
        //Forgot Password
        get("/forgotpassword", (req,res)->{
            if(Session.validate(req.session().id(), req.session().attribute("UserID"))){
                res.redirect("/home");
                return null;
            }
            
            return username;
        });
        
        post("/forgotpassword", (req, res)->{
            if(Session.validate(req.session().id(), req.session().attribute("UserID"))){
                res.redirect("/home");
                return null;
            }
            
            String state = req.session().attribute("forgot-state");
            Boolean validated = req.session().attribute("forgot-validated") == "true";
            String userid = req.session().attribute("forgot-username");
            
            if(state == "identify" || state == null){
                String user = req.queryParams("uname");
                if(Account.getSecurityQuestions(user) == null){
                    req.session().attribute("forgot-state", "identify");
                    res.redirect("/forgotpassword");
                }else{
                    req.session().attribute("forgot-state", "security");
                    req.session().attribute("forgot-username", user);
                    return security;
                }
            }else if(state == "security" && userid != null){
                
                return password;
            }else if(state == "reset" && validated){
                if(req.queryParams("pword") != req.queryParams("cpword")){
                    return password;
                }
                
                Account.changePassword(userid, req.queryParams("pword"));
                res.redirect("/home");
            }
            
            return null;
        });
    }
}
