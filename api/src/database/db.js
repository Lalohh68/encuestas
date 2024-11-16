import mysql from "promise-mysql";
import config from "./../config.js";

export const connection = mysql.createConnection({
  host: "162.241.62.55",
  database: "encues24_db_encuestas",
  user: "encues24_adminEncuestas",
  password: "{DFbvLaP@svv",
  port: 3306,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
