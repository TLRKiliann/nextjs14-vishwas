import type { Metadata } from 'next';
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
                <div key={prod.id} className='m-4'>
                    <p>Name: {prod.name}</p>
                    <p>Price: {prod.price}.- CHF</p>
                </div>
            )
        }
    })

    return (
        <div className='h-screen'>
            <p className="m-4">Details by product id: {params.productId}</p>

            {productName}

            {reviews.map((rev) => (
                rev.id === parseInt(params.productId) ? (
                    <Link key={rev.id} href={`/products/${params.productId}/reviews/${rev.id}`}>
                        {rev.categories}
                    </Link>
                ) : null
            ))}

        </div>
    )
}
export default DetailsProduct;

// params take the value of product.id
