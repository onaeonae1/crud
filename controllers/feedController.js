import routes from "../routes";
import Feed from "../models/Feed";
import Comment from "../models/Comment";
import User from "../models/User";
import passport from "passport";
//used for SINGLE feeds : 'id' is required.
//other functions will be placed to mainController.js
export const getEditFeed = async (req,res)=>{
    console.log("getEdit");
    console.log(req.params);
    const {
        params:{id},
    }=req;
    try{
        const feed = await (await Feed.findById(id)).populate("creator");
        if(feed.creator._id!=req.user.id){
            console.log(feed);
            console.log(feed.creator._id);
            console.log(req.user.id);
            throw Error();
        }
        else{
            res.render("editFeed", {pageTitle:`Edit Feed`, feed});
        }
    }
    catch(error){
        console.log("edit error");
        res.redirect(routes.home);
    }
    //편집 화면 
};
export const postEditFeed = async (req,res) =>{
    console.log("postEdit");
    const{
        params:{id},
        body:{title, description},
        file
    } = req; 
    console.log(file);
    var imageUrls= []; 
    if(file){
        imageUrls.push(`../uploads/images/${file.filename}`);
    }
    console.log(imageUrls)
    try{
        await Feed.findOneAndUpdate({_id:id}, {title,description}); 
        res.redirect(routes.feedDetail());
    }
    catch(error){
        res.redirect(routes.home);
    }

    console.log(id);
    console.log(title);
    console.log(description);

    //form 에서 보낸 데이터를 처리
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
        console.log(feed);
        res.render("feedDetail",{pageTitle:feed.title, feed});
    }
    catch(error){
        console.log("error");
        res.redirect(routes.home);   
    }
};
export const getDeleteFeed = async (req,res) =>{
    //Feed를 삭제. DB에서 완전히 삭제, 연관된 댓글들도 삭제
    console.log("post delete");
    const{
        params:{id},
    }=req;
    try{
        const feed = await Feed.findById(id).populate("creator");
        if(feed.creator._id==req.user.id){
            await Feed.findByIdAndDelete({_id:id});
            Feed.save();
            console.log("successfully deleted");
        }
        else{
            console.log("EEE");
            throw Error();
        }
    }
    catch(error){
          res.redirect(routes.home);  
    }
}