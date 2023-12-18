"use server";

import { signIn } from '@/auth';
import { cartOrderQuery, genericQuery, newMemberQuery } from './db';
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
      if (id !== "" && name !== "" && email !== "" && password !== "") {
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
      if (id !== "" && name !== "" && email !== "" && password !== "") {
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
      if (id !== "") {
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
export async function queryDecksCart(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const deckname = formData.get("deckname");
    const totalprice = formData.get("total");
    const count = formData.get("count");
    const btnSubmit = formData.get("submit");
    if (btnSubmit === "order") {
      if (id !== "" && deckname !== "" && totalprice !== "" && count !== "") {
        const result = await cartOrderQuery("INSERT INTO cartorder VALUES (?, ?, ?, ?)", 
          [id, deckname, totalprice, count]);
        if (result) {
          revalidatePath("/products/decks");
          return {message: "Data updated"}
        }
      }
    }
  }
  catch (error) {
    console.log("Error", error)
    throw error;
  }
}

// email to retrieve password
export async function forgotPasswordServerAction(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const email = formData.get("email");
    const btnForgotPassword = formData.get("submit");
    if (btnForgotPassword === "btnForgotPassword") {
      if (email !== "") {
        const result = await genericQuery("INSERT INTO forgotpassword VALUES (?)", [email]);
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

