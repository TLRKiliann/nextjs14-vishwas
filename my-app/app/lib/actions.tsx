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