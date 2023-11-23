import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
    //console.log(params, "params")
    return (
        <div className='h-screen'>
            <p className="m-4">Details by product id: {params.productId}</p>
        </div>
    )
}
export default DetailsProduct;

// params take the value of product.id

/*
export default function DetailsProduct({params}: {params: {productId: string}}) {
    if (parseInt(params.productId) > 100) {
        notFound();
    }
    console.log(params, "params")
    return (
        <div className='h-screen'>
            <p className="m-4">Details by product id: {params.productId}</p>
        </div>
    )
}
*/