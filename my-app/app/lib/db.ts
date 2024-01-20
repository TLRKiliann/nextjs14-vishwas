import mysql from 'mysql2/promise';
import type {
  MessageProps,
  ProductsProps,
  CartProps,
  EmailProps,
  ShippingProps,
  PaymentProps,
  AllProps,
  ConfirmationProps
} from './definitions';

type GenericProps = ProductsProps | CartProps | MessageProps | EmailProps | AllProps | ConfirmationProps | [];

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

// fetch all products from decks (bakerdecks, blinddecks, elementdecks, girldecks)
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

// fetch all products wheels
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

// fetch all products trucks
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
};

// fetch all products from cartorder
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
};

// insert product into cartorder
const actionOrderQuery = async (query: string, data: FormDataEntryValue[]): Promise<CartProps[]> => {
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

// update data into cartorder
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

// type of checkcardValue doesn't work (boolean & tinyint(1))!
const paymentQuery = async (query: string, data: any[]): Promise<PaymentProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as PaymentProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// shipping query
const shippingQuery = async (query: string, data: FormDataEntryValue[]): Promise<ShippingProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as ShippingProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// erase checkout_paid table to prepare copy
const resetShippingQuery = async (query: string) => {
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

//const queryToPrepareTable = async (query: string, data: GenericProps): Promise<ShippingProps[]> => {
const queryToPrepareTable = async (query: string): Promise<ShippingProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query);
    return result as ShippingProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// copy cartorder table to checkout_paid table
const queryToCopyTable = async (query: string, data: GenericProps): Promise<CartProps[]> => {
//const queryToCopyTable = async (query: string): Promise<CartProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query);
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


// display by join table checkorder page
const queryOrderPaid = async (query: string, data: GenericProps): Promise<AllProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as AllProps[];
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// display by join table checkorder page
const queryConfirmation = async (query: string, data: FormDataEntryValue[]): Promise<ConfirmationProps[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result as ConfirmationProps[];
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
const resetQuery = async (query: string) => {
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

// send email if password forgotten
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
const authQuery = async (query: string, data: FormDataEntryValue[]): Promise<EmailProps[]> => {
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
    //await db.end();
    return result as EmailProps[];
  } catch (error) {
    console.log(error);
    throw error;
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
  actionOrderQuery,
  cartOrderUpdateQuery,
  queryCartDelete,
  resetShippingQuery,
  shippingQuery,
  paymentQuery,
  queryToPrepareTable,
  queryToCopyTable,
  queryOrderPaid,
  queryConfirmation,
  resetQuery,
  sendMessage,
  showAllMessageBox,
  forgotQuery,
  authQuery 
};