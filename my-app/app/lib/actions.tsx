"use server";

import { signIn } from '@/auth';
import { newMemberQuery } from './db';
import { revalidatePath } from 'next/cache';

const mysqlServerAction = async (prevState: string | undefined, formData: FormData) => {
  const id = formData.get("id");
  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");
  const btnName = formData.get("submit");
  if (btnName === "insert") {
    if (id !== "" && name !== "" && email !== "" && password !== "") {
      const result = await newMemberQuery("INSERT INTO users VALUES (?, ?, ?, ?)", [id, name, email, password])
      if (result) {
        revalidatePath("/register");
        return {message: "Fields cannot be empty !"}
      }
    }
  }
}
export default mysqlServerAction;

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
