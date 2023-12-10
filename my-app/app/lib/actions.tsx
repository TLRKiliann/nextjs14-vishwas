"use server";

import { signIn } from '@/auth';
//import { authQuery } from './db';
// import { revalidatePath } from 'next/cache';
// import { authQuery } from './db';
import { AuthError } from 'next-auth';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    //console.log(prevState, formData, "prevState + formData in console.log");
    await signIn('credentials', Object.fromEntries(formData));
    //const data = await authQuery("SELECT * FROM users WHERE email = ?", email);
  } catch (error) {
    if ((error as AuthError).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}
