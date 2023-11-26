import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from "@/app/lib/datas";

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

    // To display name of product
    const productName = products.map((prod) => {
        if (prod.id === parseInt(params.productId)) {
        return <p key={prod.id}>Name : {prod.name}</p>
    }})

    return (
        <div className='h-screen'>
            <p className="m-4">Details by product id: {params.productId}</p>
            <div className='m-4'>
                {productName}
            </div>
        </div>
    )
}
export default DetailsProduct;

// params take the value of product.id
