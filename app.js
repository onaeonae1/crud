import express from "express";
import mysql from "mysql";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
// my module import
import {dbconfig} from "./config/database.js";
import routes from "./routes";
import {localsMiddleware} from "./middlewares";
import mainRouter from "./router/mainRouter";
const app = express();
//middleware settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set('port', process.env.PORT || 3000);
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//route , custom middleware settings
app.use(localsMiddleware);
app.use(routes.home, mainRouter);


// configuration =========================
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

export default app;