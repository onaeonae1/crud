import dotenv from "dotenv";
dotenv.config();
export const dbconfig= {
    host: 'localhost',
    user: 'root',
    port:'3306',
    password: process.env.DB_PASSWORD,
    database: 'node_test',
};