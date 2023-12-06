"use server";
//import {z} from 'zod';
import mysql from 'mysql2/promise';
import { ProductsProps } from './definitions';

/*
// Pour les form actions !
const DatabaseSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  ...
});
*/
 
//const CallProducts = DatabaseSchema.omit({ id: true, date: true });

export async function callProducts(query: string) {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: 3306,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    })
    const [result] = await db.execute(query);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/*
export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        });
    const amountInCents = amount * 100;// Test it out:
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
*/