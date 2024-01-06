"use server";

import { signIn } from '@/auth';
import { 
  cartOrderQuery,
  cartOrderUpdateQuery,
  forgotQuery,
  newMemberQuery,
  queryCartDelete,
  sendMessage
} from './db';
import { revalidatePath } from 'next/cache';

// CRUD mariadb
export async function mysqlServerAction(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");
    const btnName = formData.get("submit");
    if (btnName === "insert") {
      if (id !== null && name !== null && email !== null && password !== null) {
        const result = await newMemberQuery("INSERT INTO users VALUES (?, ?, ?, ?)", 
          [id, name, email, password]
        );
        if (result) {
          revalidatePath("/register");
          return {message: "You are registered"}
        }
      }
    }
    if (btnName === "update") {      
      if (id !== null && name !== null && email !== null && password !== null) {
        const result = await newMemberQuery("UPDATE users SET id=?, name=?, email=?, password=? WHERE id=?", 
          [id, name, email, password, id]
        );
        if (result) {
          revalidatePath("/register");
          return {message: "Data updated"}
        }
      } else {
        return {message: "No password to update"}
      }
    }
    if (btnName === "delete") {
      if (id !== null) {
        const result = await newMemberQuery("DELETE FROM users WHERE id=?", 
          [id]
        );
        if (result) {
          revalidatePath("/register");
          return {message: "Member deleted by id"}
        }
      }
    }
  }
  catch (error) {
    console.log("Error", error)
    throw error;
  }
}

// order for decks
export async function queryDecksCart(prevState: { message: string } | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const deckname = formData.get("deckname");
    const price = formData.get("price");
    const count = formData.get("count");
    const btnSubmit = formData.get("submit");
    if (btnSubmit === "order") {
      if (id !== null && deckname !== null && price !== null && count !== null) {
        const query = `INSERT INTO cartorder (id, deckname, price, count) VALUES (?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE deckname = VALUES(deckname), price = VALUES(price), count = VALUES(count)`;
        const result = await cartOrderQuery(query, [id, deckname, price, count]);
        if (result) {
          console.log("step 1 ok")
          revalidatePath("/products/decks");
          return { message: "Insert to cart" };
        }
      }
    }
    if (btnSubmit === "decrease") {
      if (id !== null && deckname !== null && price !== null && count !== null) {
        const result = await cartOrderUpdateQuery("UPDATE cartorder SET id=?, deckname=?, price=?, count=? WHERE id=?", 
          [id, deckname, price, count, id]);
        if (result) {
          revalidatePath("/products/decks");
          return {message: "Decrease from cart"}
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

// delete from cartitem
export async function deleteCartItem(prevState: {message: string} | undefined, formData: FormData) {
  try {
    console.log("test db begin")
    const id = formData.get("id");
    const btnDelete = formData.get("submit");
    if (btnDelete === "deletecartorder") {
      if (id !== null) {
        const result = await queryCartDelete("DELETE FROM cartorder WHERE id=?",
          [id])
        if (result) {
          console.log("Ok no error with pathname")
          revalidatePath("/products/decks");
          return {
            message: "Product deleted"
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

// delete item from order
export async function deleteOrder(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const btnDelete = formData.get("submit");
    if (btnDelete === "deleteorder") {
      if (id !== null) {
        const result = await queryCartDelete("DELETE FROM cartorder WHERE id=?",
          [id])
        if (result) {
          revalidatePath("/order");
          return {
            message: "Product deleted"
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

// message to send from contact
export async function messageToSend(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const message = formData.get("message");
    const btnEmail = formData.get("submit");
    if (btnEmail === "sendmessage") {
      if (username !== null && email !== null && message !== null) {
        const result = await sendMessage("INSERT INTO messagebox VALUES (?, ?, ?)",
          [username, email, message]);
        if (result) {
          revalidatePath("/contact");
          return {message: "Message was sent successfully !"}
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// email to retrieve password
export async function forgotPasswordServerAction(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const email = formData.get("email");
    const btnForgotPassword = formData.get("submit");
    if (btnForgotPassword === "btnForgotPassword") {
      if (email !== null) {
        const result = await forgotQuery("INSERT INTO forgotpassword VALUES (?)", [email]);
        if (result) {
          revalidatePath("/register");
          return {message: "You are registered"}
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    //console.log(prevState, formData, "prevState + formData in console.log");
    await signIn('credentials', Object.fromEntries(formData));

  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}


