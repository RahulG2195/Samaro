import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env.process file  
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  // host:'localhost',
  host:process.env.MYSQL_HOST,
  // port: 3306,
  port:process.env.MYSQL_PORT,
  // database:'samaro_db',
  database:process.env.MYSQL_DATABASE,
  // user: 'root',
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query({ query, values = [] }) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [results] = await connection.execute(query, values);
    return results;
  } catch (error) {
    console.error('Error in executing query:', error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}
