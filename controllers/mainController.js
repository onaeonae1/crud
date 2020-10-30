import User from "../models/User";
import Feed from "../models/Feed";
import Comment from "../models/Comment";
import routes from "../routes";
import passport from "passport";
/*
 all the general functions will be placed
 dont need any id fields. 
*/
//Home Functions
export const home = (req,res) =>{
    //TODO : need to show feeds from database
    console.log("Home");
    console.log("Connecting from : ",req.ip);
    res.render("home", {pageTitle:"Home"});
};
export const getNotes = (req,res)=>{
    res.render("notes");
}
export const search = (req,res)=>{
    //needs to search from db
    console.log("search");
    res.render("search");
};
//User Join and Login
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } 
    else {
        try {
            const user = await User({
            name,
            email
        });
        await User.register(user, password);
        next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};
export const getLogin = (req, res) =>{
    res.render("login", { pageTitle: "Log In" });
};
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});
export const logout = (req, res) => {
    // To Do: Process Log Out
    console.log("Successfully Logged Out.");
    req.logout();
    res.redirect(routes.home);
};


//Feeds Upload
export const getFeedUpload = (req,res)=>{
    console.log("getFeedUpload");
    res.render("upload"); //upload form
};
export const postFeedUpload = async (req,res)=>{
    console.log("postFeedUpload");
    console.log(req.file);
    //form에서 데이터를 불러와서 DB에 새로운 Feed 생성
    const{
        body:{title, description}
    } = req;
    const newFeed = await Feed.create({
        title,
        description,
        creator:req.user.id,
    });
    //새 feed를 만들면 id가 배정됨. 이를 유저에 추가
    console.log(`created feed : ${newFeed.id}`);
    req.user.feeds.push(newFeed.id);
    req.user.save();
    res.redirect(routes.feedDetail(newFeed.id));
};