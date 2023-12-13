import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authQuery } from './app/lib/db';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await authQuery(`SELECT * FROM users WHERE email = ?`, [email]);
    return user as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          const parseUser = JSON.stringify(user);
          const data = JSON.parse(parseUser);
          const findEmail = data.find((d:User) => d.email === email);
          const findPassword = data.find((d:User) => d.password === password);
          if ((findEmail.email === email) && (findPassword.password === password)) {
            console.log("Log in ok !")
            return data;
          }
          else return null;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
