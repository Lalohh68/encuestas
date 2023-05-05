import mysql from "promise-mysql"
import config from "./../config.js";


export const getConnection=await  mysql.createConnection({
    host: 'ls-7efa507eec27c8750dc12bbf2df9bc8dde15e61c.cbdfpdh72gle.us-east-2.rds.amazonaws.com',
    database: 'caitecmx_encuesta',
    user: 'dbmasteruser',
    password: 'lalohh68',
    port:3306
});

