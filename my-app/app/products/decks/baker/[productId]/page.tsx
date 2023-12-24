import Link from 'next/link';
import { notFound } from 'next/navigation';
import { genericQuery } from '@/app/lib/db';
import { DecksProps } from '@/app/lib/definitions';
import { reviews } from "@/app/lib/datas";
import DeckForm from '@/app/ui/products/decks/deck-form';

type Props = {
    params: {
        productId: string;
    }
}

const DetailsProduct = async ({params}: Props) => {
    if (parseInt(params.productId) > 100) {
        notFound();
    }

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error: product id is not a number");
    }

    const data: unknown = await genericQuery("SELECT * FROM bakerdecks", []);
    const bakerdecks: string = JSON.stringify(data);
    
    // To display name
    const productName = JSON.parse(bakerdecks).map((prod: DecksProps) => {
        if (prod.id === parseInt(params.productId)) {
            return (
                <DeckForm
                    key={prod.id}
                    id={prod.id}
                    deckname={prod.deckname}
                    img={prod.img}
                    price={prod.price}
                    stock={prod.stock}
                />
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
