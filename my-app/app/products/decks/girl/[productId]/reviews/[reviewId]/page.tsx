import { notFound } from 'next/navigation';
import Image from 'next/image';
import { genericQuery } from '@/app/lib/db';
import { DecksProps, PropsProdReview } from '@/app/lib/definitions';
import { reviewsGirl } from "@/app/lib/datas";

export default async function ReviewById({ params }: PropsProdReview) {
    
    if (parseInt(params.reviewId) > 9) {
        notFound();
    };

    if (parseInt(params.reviewId) !== Number(params.reviewId)) {
        throw new Error("Error review id is not a number");
    };

    const data: unknown = await genericQuery("SELECT * FROM girldecks", []);
    const girldecks: string = JSON.stringify(data);

    return (
        <div className='w-full'>
            {reviewsGirl.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <div key={rev.id} className='md:w-3/5 xl:w-4/5 m-auto'>
                        
                        <h3 className='text-3xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-10'>
                            {rev.categories}
                        </h3>

                        <div className='flex items-center justify-center mx-10 mt-5'>

                            <div className='flex flex-col items-center w-full'>
                                <video autoPlay muted loop controls className='w-full h-auto transition transform animate-scale-start'>
                                    <source src={rev.video} type="video/mp4" />
                                </video>
                                <div className='flex items-center w-full text-sm text-slate-100
                                    py-2'>
                                    <span className='flex items-center text-sm font-bold bg-red-600 ml-0 mr-3 px-[7px] 
                                        pt-[8px] pb-[5px] rounded-full'>
                                        {rev.label}
                                    </span> 
                                    <p className='flex items-center justify-center text-lg text-transparent bg-clip-text
                                        dark-title-h1 light-title-h1 mt-1'>
                                        {rev.review}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                ) : null
            ))}

            {JSON.parse(girldecks).map((prod: DecksProps) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id} className='flex text-slate-200 bg-slate-800 my-10 px-6 py-6'>
                        
                        <div>
                            <Image src={prod.img} width={100} height={100} alt="img perID" 
                                className='object-cover rounded' />
                        </div>

                        <div className='flex flex-col items-start justify-between w-40'>

                            <div>
                                <p className='text-lg font-bold ml-4'>{prod.deckname.toUpperCase()}</p>
                            </div>

                            <div>
                                <p className='text-md font-bold ml-4'>{prod.price.toFixed(2)}.- CHF</p>
                                <p className='text-md font-bold ml-4'>Stock: {prod.stock}</p>
                            </div>
           
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    )
}

/*
<div className='p-4'>
    <p>Product id: {params.productId} and article id: {params.reviewId}</p>
</div>
*/