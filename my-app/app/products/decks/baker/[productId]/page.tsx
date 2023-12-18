import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { genericQuery } from '@/app/lib/db';
import { DecksProps } from '@/app/lib/definitions';
import { reviews } from "@/app/lib/datas";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Baker ${params.productId}`)
        }, 300)
    })
    return {
        title: `Product ${title}`
    }
}

const DetailsProduct = async ({params}: Props) => {
    if (parseInt(params.productId) > 100) {
        notFound();
    }

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error: product id is a number");
    }

    const data: unknown = await genericQuery("SELECT * FROM bakerdecks", []);
    const bakerdecks: string = JSON.stringify(data);
    
    // To display name
    const productName = JSON.parse(bakerdecks).map((prod: DecksProps) => {
        if (prod.id === parseInt(params.productId)) {
            return (
                <div key={prod.id} className='flex justify-center w-full h-auto text-md'>
                    <div className='flex flex-col
                        dark:bg-gradient-to-tr dark:from-slate-900 dark:from-10% 
                        dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
                        bg-gradient-to-tr from-violet-400 from-10% 
                        via-slate-50 via-50% to-violet-400 to-90%
                        transform transition translate-y-0 animate-up-start
                        px-10 py-4 rounded-lg shadow-lg'
                    >
                        <p className='pb-2'>Name: {prod.deckname}</p>
                        <p className='pb-2'>Price: {prod.price.toFixed(2)}.- CHF</p>
                        <div className='flex w-[200px] h-auto shadow-lg rounded-lg'>
                            <Image src={prod.img} width={1920} height={1080} alt="img product" 
                                className='flex object-cover rounded-lg'/>
                        </div>
                        <p className='pt-2'>Stock: {prod.stock}</p>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className='min-h-screen'>
            <p className="p-4">Details by product id: {params.productId}</p>

                <div className="flex align-center justify-start">
                    <Link 
                        href={`/products/decks/baker/${params.productId}/reviews`}
                        className='text-lg font-bold dark:text-sky-500 hover:dark:text-sky-400 
                        text-violet-500 hover:text-violet-400
                        p-4'
                    >
                        All videos with baker
                    </Link>
                </div>

            {productName}

            {reviews.map((rev) => (
                rev.id === parseInt(params.productId) ? (
                    <div key={rev.id} className="flex align-center justify-center">
                        <Link 
                            href={`/products/decks/baker/${params.productId}/reviews/${rev.id}`}
                            className='text-lg font-bold dark:text-sky-500 hover:dark:text-sky-400 
                            text-violet-500 hover:text-violet-400
                            p-4'
                        >
                            {rev.categories}
                        </Link>

                    </div>
                ) : null
            ))}
        </div>
    )
}
export default DetailsProduct;
