import express from "express";
import { 
    getEditFeed,
    postEditFeed,
    getFeedDetail,
    getDeleteFeed,
} from "../controllers/feedController";
import routes from "../routes";
import {
    uploadImage
} from "../middlewares";
//Router for single feed.
const feedRouter = express.Router();

feedRouter.get(routes.editFeed(), getEditFeed);
feedRouter.post(routes.editFeed(), uploadImage, postEditFeed);
feedRouter.get(routes.deleteFeed(), getDeleteFeed);
feedRouter.get(routes.feedDetail(),getFeedDetail);

export default feedRouter;