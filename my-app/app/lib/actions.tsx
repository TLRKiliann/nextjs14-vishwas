"use server";

import { signIn } from '@/auth';
import { newMemberQuery } from './db';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';

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
        if (password !== null || password !== undefined) {
          const salt = crypto.randomBytes(16).toString("hex");
          const hash = crypto
            .pbkdf2Sync(password, salt, 1000, 64, "sha512")
            .toString("hex");
          
          const result = await newMemberQuery("UPDATE users SET id=?, name=?, email=?, password=? WHERE id=?", 
            [id, name, email, hash, id]
          );
          if (result) {
            revalidatePath("/register");
            return {message: "Data updated"}
          }
        } else {
          return {message: "No password to update"}
        }
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
