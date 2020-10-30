import express from "express";
import routes from "../routes";
import { 
  home, 
  search,
  getJoin,
  postJoin,
  postLogin,
  getLogin,
  logout,
  getFeedUpload,
  postFeedUpload,
  getNotes
 } from "../controllers/mainController"; 
import {
  uploadImage
} from "../middlewares"
const mainRouter = express.Router();

mainRouter.get(routes.join, getJoin);
mainRouter.post(routes.join, postJoin, postLogin);

mainRouter.get(routes.login, getLogin);
mainRouter.post(routes.login, postLogin);

mainRouter.get(routes.notes, getNotes);
mainRouter.get(routes.home, home);
mainRouter.get(routes.search, search);
mainRouter.get(routes.logout, logout);

mainRouter.get(routes.upload,getFeedUpload);
mainRouter.post(routes.upload, uploadImage, postFeedUpload);

export default mainRouter;