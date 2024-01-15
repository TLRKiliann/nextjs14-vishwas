import type { ProductsProps, ReviewsProps } from '@/app/lib/definitions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { queryDecks } from '@/app/lib/db';
import { reviewsGirl } from "@/app/lib/datas";
import BoxImage from '@/app/ui/products/decks/box-image';
import DeckUnit from '@/app/ui/products/decks/deck-unit';

type Props = {
    params: {
        productId: string;
    }
};

const DetailsProduct = async ({params}: Props) => {

    if (parseInt(params.productId) > 36) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error: product id is not a number");
    };

    const request: ProductsProps[] = await queryDecks("SELECT * FROM girldecks", []);
    const data: string = JSON.stringify(request);
    
    // Display card in side right
    const productName = JSON.parse(data).map((prod: ProductsProps) => {
        if (prod.id === parseInt(params.productId)) {
            return (
                <DeckUnit
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    img={prod.img}
                    price={prod.price}
                    stock={prod.stock}
                />
            )
        }
    });

    return (
        <>
            <div className="flex align-center justify-start">
                <Link 
                    href={`/products/decks/girl/${params.productId}/reviews`}
                    className='text-lg font-bold dark:text-sky-500 hover:dark:text-sky-400 
                    text-violet-500 hover:text-violet-400
                    p-4'
                >
                    All videos of Girl
                </Link>
            </div>

            <div className='flex justify-center w-full h-auto'>

                <BoxImage paramsId={params.productId} data={JSON.parse(data)} />

                {productName}
            
            </div>

            {reviewsGirl.map((rev: ReviewsProps) => (
                rev.id === parseInt(params.productId) ? (
                    <div key={rev.id} className="flex align-center justify-center">
                        <Link 
                            href={`/products/decks/girl/${params.productId}/reviews/${rev.id}`}
                            className='text-lg text-transparent bg-clip-text dark-title-h1 light-title-h1 
                            hover:dark:text-sky-400 hover:text-violet-400 p-4'
                        >
                            {rev.categories}
                        </Link>
                    </div>
                ) : null
            ))}
        </>
    )
};
export default DetailsProduct;
