import routes from "./routes";
export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "simple CRUD";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
};