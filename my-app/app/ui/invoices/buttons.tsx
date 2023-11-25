import Link from 'next/link';
//import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice() {
    return (
      <Link
        href="/dashboard/invoices/create"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium 
          text-white transition-colors hover:bg-blue-500 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Create Invoice</span>{' '}
        <div className="h-5 md:ml-4" />
      </Link>
    );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <div className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {

  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);
 
  return (
    <form action={""}>
  
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <div className="w-4" />
      </button>
  
    </form>
  );
}
