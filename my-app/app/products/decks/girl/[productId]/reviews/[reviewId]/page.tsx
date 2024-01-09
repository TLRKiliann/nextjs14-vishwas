import { notFound } from 'next/navigation';
import Image from 'next/image';
import { genericQuery } from '@/app/lib/db';
import { DecksProps, PropsProdReview } from '@/app/lib/definitions';
import { reviewsGirl } from "@/app/lib/datas";
import Carousel from '@/app/ui/carousel';
import elementDeck from "@/public/img_carousel/deck_element9.png";
import girlDeck from "@/public/img_carousel/deck_girl2.png";
import bakerDeck from "@/public/img_carousel/deck_baker5.png";
import blindDeck from "@/public/img_carousel/deck_blind6.png";

export default async function ReviewById({ params }: PropsProdReview) {
    
    if (parseInt(params.reviewId) > 100) {
        notFound();
    }

    if (parseInt(params.reviewId) !== Number(params.reviewId)) {
        throw new Error("Error review id is not a number");
    }

    const data: unknown = await genericQuery("SELECT * FROM girldecks", []);
    const girldecks: string = JSON.stringify(data);

    const images = [
        bakerDeck,
        elementDeck,
        girlDeck,
        blindDeck
    ];

    return (
        <div className='w-full'>
            <div className='p-4'>
                <p>Product id: {params.productId} and article id: {params.reviewId}</p>
            </div>
            {JSON.parse(girldecks).map((prod: DecksProps) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id} className='p-4'>
                        <p>{prod.deckname}</p>
                        <p>{prod.price.toFixed(2)}.- CHF</p>
                    </div>
                ) : null
            ))}
            
            {reviewsGirl.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <div key={rev.id} className='p-4'>
                        <h3 className='text-2xl'>{rev.categories}</h3>
                        <p className='text-md mt-2'>{rev.review}</p>
                        <div className='w-2/5 py-4'>
                            <video autoPlay muted controls className='w-full h-auto'>
                                <source src={rev.video} type="video/mp4" />
                            </video>
                        </div>

                    </div>
                ) : null
            ))}

            <h2 className='text-xl p-4'>
                We have all products that you need !    
            </h2>
            <Carousel loop>
                {images.map((src, i) => {
                return (
                    <div key={i}
                    className="relative flex shrink-0 grow-0 xs:w-[100px] sm:w-[200px] md:w-[300px] 
                        xs:h-[100px] sm:h-[200px] md:h-[300px] sm:mx-[350px] lg:mx-[380px] 2xl:mx-[850px] 
                        sm:my-6 md:my-3"
                    >
                    <Image src={src} 
                        width={300} height={300} fill={false} 
                        className="m-auto" 
                        alt="img carousel"
                    />
                    </div>
                );
                })}
            </Carousel>

        </div>
    )
}
