import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config({ path: "../../.env" });
const dbConnect = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});
export default dbConnect;
