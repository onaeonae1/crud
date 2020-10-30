import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import passport from "passport";
import path from "path";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
// my module import
import "./passport";
import routes from "./routes";
import {localsMiddleware} from "./middlewares";
import mainRouter from "./routers/mainRouter";
import userRouter from "./routers/userRouter";
import feedRouter from "./routers/feedRouter";
const app = express();
const CookieStore = MongoStore(session);
//middleware settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set('port', process.env.PORT || 3000);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));


//route , custom middleware settings
app.use(
  session({
    secret:process.env.COOKIE_SECRET,
    resave:true,
    saveUninitialized:false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);
app.use(routes.home, mainRouter);
app.use(routes.users, userRouter);
app.use(routes.feeds, feedRouter);
// configuration =========================

export default app;