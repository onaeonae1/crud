import express from "express";
import { 
    getEditFeed,
    postEditFeed,
    getFeedDetail,
} from "../controllers/feedController";
import routes from "../routes";
import {
    uploadImage
} from "../middlewares";
//controller import
const feedRouter = express.Router();

feedRouter.get(routes.editFeed, getEditFeed);
feedRouter.post(routes.editFeed, uploadImage, postEditFeed);
feedRouter.get(routes.feedDetail(),getFeedDetail);

export default feedRouter;