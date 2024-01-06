import mysql from 'mysql2/promise';
import { MessageProps } from './definitions';
//import type { DecksProps } from './definitions';

const db_config = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
})

// fetch all products by server action (no api needed !)
const genericQuery = async (query: string, data: any) => {
  const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    //await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// create member (register)
const newMemberQuery = async (query: string, data: any) => {
    const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// cart order query
const cartOrderQuery = async (query: string, data: any) => {
    const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    //await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//cart order update query
const cartOrderUpdateQuery = async (query: string, data: any) => {
  const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    //await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// delete item from cart
const queryCartDelete = async (query: string, data: any) => {
    const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    //await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// send message from contact with server-actions
const sendMessage = async (query: string, data: any) => {
    const db = await db_config;
  try {
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// display all messages in dashboard
const showAllMessageBox = async (query: string, data: MessageProps[]) => {
    const db = await db_config;
  try {
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
      port: Number(process.env.MYSQL_PORT),
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
  genericQuery,
  newMemberQuery,
  cartOrderQuery,
  cartOrderUpdateQuery,
  queryCartDelete,
  sendMessage,
  showAllMessageBox,
  authQuery 
};