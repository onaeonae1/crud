import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/mainController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin
} from "../controllers/userController";

const mainRouter = express.Router();

mainRouter.get(routes.join, getJoin);
mainRouter.post(routes.join, postJoin, postLogin);

mainRouter.get(routes.login, getLogin);
mainRouter.post(routes.login, postLogin);

mainRouter.get(routes.home, home);
mainRouter.get(routes.search, search);
mainRouter.get(routes.logout, logout);

export default mainRouter;