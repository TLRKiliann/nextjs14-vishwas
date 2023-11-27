import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { fetchInvoicesPages } from '@/app/lib/datas';
import { Suspense } from 'react';

import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default function Invoices({ searchParams }: {
    searchParams?: {query?: string, page?: string}}) {
    
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page || 1);
    const totalPages = fetchInvoicesPages(query);
    
    return (
        <>
            <div className='flex justify-center mt-6'>
                <Search placeholder="Something for placeholder" />
                <CreateInvoice />
            </div>

            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
      
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
