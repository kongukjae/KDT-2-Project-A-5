// import dbConnect from "../../utils/DB/dbConfigure";
// export default () => {
//   return new Promise((resolve, reject) => {
//     dbConnect.query('SELECT COUNT(taxiID) AS count FROM taxi', (err, results: any) => {
//       if (err) {
//         console.error(err);
//         reject(err);
//       } else {
//         const count = results[0].count;
//         console.log(count);
//         resolve(count);
//       }
//     });
//   });
// };
// refreshData()