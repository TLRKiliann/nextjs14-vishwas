import { notFound } from 'next/navigation';

export default function DetailsProduct({params}: {params: {productId: string}}) {
    if (parseInt(params.productId) > 100) {
        notFound();
    }
    return (
        <p className="m-4">Details of product id: {params.productId}</p>
    )
}