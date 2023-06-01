import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config({path : "../../.env"})
const dbConnect = mysql.createConnection( {
  host : process.env.db_host,
  user : process.env.db_user,
  password : process.env.db_password,
  database : process.env.db_database
});
// ! DB 연결 명령문
// dbConnect.connect((err)=> {
//   if(err) {
//     console.error("DB연결에 실패했습니다", err);
//     return;
//   }
//   console.log("DB연결에 성공했습니다")
// })
// ! DB 연결 끊기 명령문
// dbConnect.end((err) => {
//   if (err) {
//     console.error("DB연결 끊기에 실패했습니다.", err);
//     return;
//   }
//   console.log("DB와의 연결을 성공적으로 끊었습니다");
// });
export default dbConnect;