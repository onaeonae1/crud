import dotenv from "dotenv";
dotenv.config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password: process.env.DB_PASSWORD,
    database:'node_test'
});
connection.connect(); //connect
connection.query('SELECT * from Users', (error, row,fileds)=>{
    if(error){
        console.log(error)
    }
    console.log('User info is : ', row );
});
var sql = 'INSERT INTO Users VALUES(?, ?)';
var params = ['onaeonae3', '3333'];
/*
connection.query(sql,params,(error, rows, fileds)=>{
    if(error){
        console.log(error);
    }
    console.log(rows);
});
*/
connection.end();