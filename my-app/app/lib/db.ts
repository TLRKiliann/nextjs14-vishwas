import mysql from 'mysql2/promise';
import { ProductsProps } from './definitions';
import { User } from './definitions';

// fetch all products by server action (no api needed !)
const executeQuery = async (query: string, data: ProductsProps[]) => {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: 3306,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    })
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// authentication
const authQuery = async (query: string, data: User) => { // User
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: 3306,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      namedPlaceholders: true,
    })
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { 
  executeQuery,
  authQuery 
};