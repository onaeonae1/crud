import routes from "../routes";
import Feed from "../models/Feed";
import Comment from "../models/Comment";
import User from "../models/User";
import passport from "passport";
//used for SINGLE feeds : 'id' is required.
//other functions will be placed to mainController.js
export const getEditFeed = (req,res)=>{
    console.log("getEdit");
    res.render("editFeed");
    //편집 화면 
};
export const postEditFeed = (req,res) =>{
    console.log("postEdit");
    //form 에서 보낸 데이터를 처리
    console.log(req.file);
    res.redirect(routes.home);
};
export const getFeedDetail = async (req,res)=>{
    //detail 페이지
    const{
        params:{id},
    } = req;
    try{
        const feed = await Feed.findById(id)
            .populate("creator")
            .populate("comments")
        res.render("feedDetail",{pageTitle:feed.title, feed});
    }
    catch(error){
        console.log("error");
        res.redirect(routes.home);   
    }
};
export const postDeleteFeed = (req,res) =>{
    //Feed를 삭제. DB에서 완전히 삭제, 연관된 댓글들도 삭제

}