import { notFound } from 'next/navigation';

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
// params take the value of product.id