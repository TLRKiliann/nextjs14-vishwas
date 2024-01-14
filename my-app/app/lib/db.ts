import mysql, { OkPacketParams, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import type {
  MessageProps,
  ProductsProps,
  CartProps,
  EmailProps,
  //PaymentProps,
} from './definitions';

//type GenericResult = ProductsProps | CartProps | MessageProps | EmailProps;

type GenericProps = ProductsProps | CartProps | MessageProps | EmailProps | [];

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// fetch all products by server action (no api needed !)
const queryDecks = async (query: string, data: GenericProps): Promise<ProductsProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as ProductsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// fetch all products wheels by server action
const queryCartOrder = async (query: string, data: GenericProps): Promise<CartProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as CartProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// fetch all products wheels by server action
const queryWheels = async (query: string, data: GenericProps): Promise<ProductsProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as ProductsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// fetch all products trucks by server action
const queryTrucks = async (query: string, data: GenericProps): Promise<ProductsProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as ProductsProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// create member (register)
const newMemberQuery = async (query: string, data: any) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

const cartOrderQuery = async (query: string, data: FormDataEntryValue[]): Promise<CartProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as CartProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

//cart order update query
const cartOrderUpdateQuery = async (query: string, data: FormDataEntryValue[]): Promise<CartProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as CartProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// delete item from cart
const queryCartDelete = async (query: string, data: FormDataEntryValue[]): Promise<CartProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as CartProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// type of checkcardValue doesn't work !
const paymentQuery = async (query: string, data: any[]) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// erase cartorder table
const eraseQuery = async (query: string) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// send message from contact with server-actions
const sendMessage = async (query: string, data: FormDataEntryValue[]): Promise<MessageProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as MessageProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// display all messages in dashboard
const showAllMessageBox = async (query: string, data: MessageProps[]) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

const forgotQuery = async (query: string, data: FormDataEntryValue[]): Promise<EmailProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as EmailProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
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

process.on('SIGINT', async () => {
  if (pool) {
    await pool.end();
  }
  process.exit();
});

export { 
  queryDecks,
  queryCartOrder,
  queryTrucks,
  queryWheels,
  newMemberQuery,
  cartOrderQuery,
  cartOrderUpdateQuery,
  queryCartDelete,
  paymentQuery,
  eraseQuery,
  sendMessage,
  showAllMessageBox,
  forgotQuery,
  authQuery 
};