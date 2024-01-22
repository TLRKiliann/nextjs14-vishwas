import type { ProductsProps, ReviewsProps } from '@/app/lib/definitions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { queryDecks } from '@/app/lib/db';
import { reviewsBlind } from "@/app/lib/datas";
import BoxImage from '@/app/ui/products/decks/box-image';
import DeckUnit from '@/app/ui/products/decks/deck-unit';

type Props = {
    params: {
        productId: string;
    }
};

const DetailsProduct = async ({params}: Props) => {
    
    if (parseInt(params.productId) > 18) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error: product id is not a number");
    };

    const request: ProductsProps[] = await queryDecks("SELECT * FROM blinddecks", []);
    const data: string = JSON.stringify(request);
    
    // Display card in side right
    const productName = JSON.parse(data).map((prod: ProductsProps) => {
        if (prod.id === parseInt(params.productId)) {
            return (
                <div key={prod.id} className='w-2/5'>
                    <DeckUnit
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        img={prod.img}
                        price={prod.price}
                        stock={prod.stock}
                    />
                </div>
            )
        }
    });

    return (
        <>
            <div className='flex justify-center w-3/5 h-auto m-auto mt-10 xl:mt-[8%] rounded-xl'>

                <BoxImage paramsId={params.productId} data={JSON.parse(data)} />

                {productName}
            
            </div>

            {reviewsBlind.map((rev: ReviewsProps) => (
                rev.id === parseInt(params.productId) ? (
                    <div key={rev.id} className="flex items-center justify-center">
                        <Link 
                            href={`/products/decks/blind/${params.productId}/reviews/${rev.id}`}
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
