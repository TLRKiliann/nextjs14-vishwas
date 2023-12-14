import { notFound } from 'next/navigation';
import Image from 'next/image';
import { genericQuery } from '@/app/lib/db';
import { ProductsProps, PropsProdReview } from '@/app/lib/definitions';
import { reviews } from "@/app/lib/datas";
import Carousel from '@/app/ui/carousel';
import boxCpui7 from "@/public/img_carousel/box-corei7.png";
import boxCpui9 from "@/public/img_carousel/box-corei9.png";
import dualBox from "@/public/img_carousel/dual-box.png";
import multiBox from "@/public/img_carousel/multi-box.png";

export default async function ReviewById({ params }: PropsProdReview) {
    
    if (parseInt(params.reviewId) > 100) {
        notFound();
    }

    if (parseInt(params.reviewId) !== Number(params.reviewId)) {
        throw new Error("Error review id is a number");
    }

    const data: unknown = await genericQuery("SELECT * FROM products", []);
    const products: string = JSON.stringify(data);

    const images = [
        dualBox,
        boxCpui7,
        boxCpui9,
        multiBox
    ];

    return (
        <div className='flex flex-col min-h-screen py-[75px]'>
            <div className='p-4'>
                <p>Product id: {params.productId} and article id: {params.reviewId}</p>
            </div>
            {JSON.parse(products).map((prod: ProductsProps) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id} className='p-4'>
                        <p>{prod.name}</p>
                        <p>{prod.price.toFixed(2)}.- CHF</p>
                    </div>
                ) : null
            ))}
            {reviews.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <div key={rev.id} className='p-4'>
                        <h3 className='text-2xl'>{rev.categories}</h3>
                        <p className='text-md mt-2'>{rev.review}</p>
                    </div>
                ) : null
            ))}
            <h2 className='text-xl p-4'>
                We have all products that you need !    
            </h2>
            <Carousel loop>
                {images.map((src, i) => {
                    return (
                        <div 
                        className="relative w-2/6 sm:w-3/6 lg:w-2/6 xl:w-[400px] h-64 
                            flex shrink-0 grow-0
                            sm:mx-[350px] lg:mx-[350px] 2xl:mx-[850px]
                            sm:pt-4 md:pt-3"
                        key={i}>
                        <Image src={src} 
                            width={1920} height={1080} fill={false} 
                            className="absolute m-auto object-cover" 
                            alt="alt"
                        />
                    </div>
                );
                })}
            </Carousel>

        </div>
    )
}

// params take the string value of productId & reviewId