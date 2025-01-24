// import mysql from "mysql2/promise";

// export async function query({ query, values = [] }) {
//   try {
//     const dbconnection = await mysql.createConnection({
//       Host: 'localhost',
//       user: 'root',
//       password: '',
//       port: '3306',
//     });
//     const [results] = await dbconnection.execute(query, values);
//     dbconnection.end();
//     return results;
//   } catch (error) {
//     console.log("error in connecting Database: " + error);
//     throw Error(error.message);
//     return { error };
//   }
// }