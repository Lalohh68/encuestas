import mysql from "promise-mysql"
import config from "./../config";


const connection= mysql.createConnection({
    host: '65.99.225.119',
    database: 'caitecmx_encuesta',
    user: 'caitecmx_encuesta',
    password: 'acSQuqjdaJ2z',
    port:3306
});

const getConnection = ()=>{
    return connection
}

module.exports = {
    getConnection
}