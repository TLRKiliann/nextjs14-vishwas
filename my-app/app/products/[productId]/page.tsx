import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from "@/app/lib/datas";
import { reviews } from "@/app/lib/datas";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 300)
    })
    return {
        title: `Product ${title}`
    }
}

const DetailsProduct = async ({params}: Props) => {
    if (parseInt(params.productId) > 100 || parseInt(params.productId) !== Number(params.productId)) {
        notFound();
    }

    // To display name & color of product
    const productName = products.map((prod) => {
        if (prod.id === parseInt(params.productId)) {
            return (
                <div key={prod.id} className='flex justify-center w-full h-auto text-md'>
                    <div className='flex flex-col
                        dark:bg-gradient-to-tr dark:from-slate-900 dark:from-10% 
                        dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
                        bg-gradient-to-tr from-blue-400 from-10% 
                        via-slate-50 via-50% to-blue-400 to-90%
                        transform transition translate-y-0 animate-up-start

                        px-10 py-4 rounded-lg shadow-lg'
                    >
                        <p className='pb-2'>Name: {prod.name}</p>
                        <p className='pb-2'>Price: {prod.price}.- CHF</p>
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

            {productName}


            {reviews.map((rev) => (
                rev.id === parseInt(params.productId) ? (
                    <div key={rev.id} className="flex align-center justify-center">
                        <Link 
                            href={`/products/${params.productId}/reviews/${rev.id}`}
                            className=' text-sky-500 text-lg font-bold hover:text-sky-400 p-4'
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

// params take the value of product.id
