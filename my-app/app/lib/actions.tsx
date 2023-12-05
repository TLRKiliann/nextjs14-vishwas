import mysql from 'mysql2/promise';

const callProducts = async (query: string, data: any) => {
  try {
    const db = await mysql.createConnection({
      host: "192.168.18.9", //process.env.HOST,
      port: 3306, //process.env.PORT,
      database: "mytable", //process.env.DATABASE,
      user: "koala33", //process.env.USER,
      password: "Ko@l@tr3379" //process.env.PASSWORD
    })
    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export default callProducts;

/*
export async function deleteInvoice(id: string) {
    try {
      //throw new Error('Failed to Delete Invoice');
     
      // Unreachable code block
      await sql`DELETE FROM invoices WHERE id = ${id}`;
      revalidatePath('/dashboard/invoices');
      return { message: 'Deleted Invoice' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice' };
    }
}
*/