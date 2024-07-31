import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env.process file  
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host:'localhost',
  port: 3306,
  database:'samaro_db',
  user: 'root',
  password: 'Samro2024',
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
