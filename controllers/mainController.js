import User from "../models/User";
import routes from "../routes";

export const home = (req,res) =>{
    console.log("Home");
    if(req.user){
        console.log(req.user.email);
    }
    res.render("home", {pageTitle:"Home"});
}
export const search = (req,res)=>{
    console.log("search");
    res.render("search");
}