import mysql from 'mysql2/promise';
import { ProductsProps } from './definitions';

export async function callProducts(query: string, data: ProductsProps[]) {
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
