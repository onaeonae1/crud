import routes from "./routes";
import multer from "multer";
export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "simple CRUD";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};

const multerImage = multer({
    dest:"uploads/images",
});
const multerAvatar = multer({
    dest: "uploads/avatar/"
});
export const uploadImage =multerImage.single("imageFile");
export const uploadAvatar = multerAvatar.single("avatar");
