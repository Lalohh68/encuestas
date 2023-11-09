import mysql from "promise-mysql";
import config from "./../config.js";

export const connection = mysql.createConnection({
  host: "db5014755928.hosting-data.io",
  database: "dbs12261607",
  user: "dbu1543851",
  password: "Laloquera23*",
  port: 3306,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
