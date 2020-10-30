import passport from "passport";
import routes from "../routes";
import User from "../models/User";



export const userDetail = async (req, res) =>{
  console.log("user detail");
  const {
    params : {id}
  } = req;
  try{
    const user = await User.findById(id).populate("feeds");
    console.log(user);
    res.render("userDetail", {pageTitle: "User Detail", user});
  }
  catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
  //res.render("userDetail", { pageTitle: "User Detail" });
};
export const getEditProfile = (req, res) =>{
  res.render("editProfile", { pageTitle: "Edit Profile" });
};
export const postEditProfile = async (req,res) =>{
  console.log(req.file.path);
  const {
    body:{status},
    file
  } = req;
  try{
    await User.findByIdAndUpdate(req.user.id,{
      status,
      avatarUrl: file? file.path : req.user.avatarUrl
    });
  }
  catch(error){
    console.log(error);
    res.redirect(`/users${routes.editProfile}`);
  }
   res.redirect(routes.me); //유저 프로필로 리다이렉트
};
export const getChangePassword = (req, res) =>{
  res.render("changePassword", { pageTitle: "Change Password" });
};
export const postChangePassword = (req,res) =>{
  console.log(req.body);
  res.redirect(routes.home);
}