import passport from "passport";
import User from "./models/User";
//User 에 plugin 된 passport-local-mongoose strategy를 사용한다! 
//serialize, deserialize 모두 거기서 가져옴
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
