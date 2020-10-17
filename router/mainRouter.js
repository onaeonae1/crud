import express from "express";
import routes from "../routes";
import {getLogin, Home, postLogin, Users} from "../controllers/mainController";
const mainRouter = express.Router();

mainRouter.get(routes.home, Home);
mainRouter.get(routes.users, Users)

mainRouter.get(routes.login, getLogin)
mainRouter.post(routes.login, postLogin)
export default mainRouter;