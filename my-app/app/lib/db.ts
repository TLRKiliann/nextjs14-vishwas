import mysql from 'mysql2/promise';
import type { ProductsProps } from './definitions';
import type { User } from './definitions';
//import { FormatDetection } from 'next/dist/lib/metadata/types/extra-types';

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
    console.log(query, typeof data, "query data")
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// authentication
const authQuery = async (query: string, data: string[]) => {
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