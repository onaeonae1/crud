import mysql from "mysql";
import {dbconfig} from "../config/database";
import routes from "../routes";
const connection = mysql.createConnection(dbconfig);
export const Home = (req,res) =>{
    console.log("Home");
    res.render("home");
}
export const Users = async (req,res)=>{
    await connection.query('SELECT * from Users', (error,rows)=>{
        if(error) throw error;
        console.log('User info is : ',rows );
        res.render("users");
        //res.send(rows);
    });
    console.log("Users");
}
export const getLogin = (req,res,next)=>{
    console.log("getLogin");
    res.render("login");
}
export const postLogin = async (req,res,next) =>{
    const{
        body :{id,password},
    } = req;
    const searchid = `"${id}"`; 
    await connection.query(`SELECT * from Users WHERE id = ${searchid}`, (error,rows)=>{
        if(error) throw error;
        if(rows.length===1){
            const searchPW = rows[0].password;
            if(searchPW===password){
                console.log("login success");
            }
            else{
                console.log("login failed : wrong password");
            }
        }
        else{
            console.log("no data with such id");
        }
    });

    res.redirect(routes.home);
}
export const getJoin = (req,res,next) =>{

}
export const postJoin = (req,res,next) =>{

}