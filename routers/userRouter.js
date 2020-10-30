import express from "express";
import routes from "../routes";
import {
  userDetail,
  postChangePassword,
  getChangePassword,
  getEditProfile,
  postEditProfile,
} from "../controllers/userController";
import {
  uploadAvatar
} from "../middlewares";
const userRouter = express.Router();

userRouter.get(routes.editProfile,getEditProfile);
userRouter.post(routes.editProfile, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, getChangePassword);
userRouter.post(routes.changePassword, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;