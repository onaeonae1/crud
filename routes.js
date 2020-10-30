/// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const NOTES = "/notes";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Feeds 
const FEEDS = "/feeds";
const UPLOAD = "/upload";
const FEED_DETAIL="/:id";
const EDIT_FEED = "/:id/edit";
const DELETE_FEED = "/:id/delete";


const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  notes:NOTES,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me:ME,
  //feeds
  feeds:FEEDS,
  upload:UPLOAD,
  feedDetail:(id)=>{
    if(id){
      return `/feeds/${id}`
    } else{
      return FEED_DETAIL;
    }
  },
  editFeed: (id)=>{
    if(id){
      return `/feeds/${id}/edit`;
    } else{
      return EDIT_FEED;
    }
  },
  deleteFeed : (id) =>{
    if(id){
      return `/feeds/${id}/delete`;
    }else{
      return DELETE_FEED;
    }
  }
};

export default routes;