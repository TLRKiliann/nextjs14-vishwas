import { notFound } from 'next/navigation';
import Image from 'next/image';
import { genericQuery } from '@/app/lib/db';
import { DecksProps, PropsProdReview } from '@/app/lib/definitions';
import { reviews } from "@/app/lib/datas";
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

    const data: unknown = await genericQuery("SELECT * FROM bakerdecks", []);
    const bakerdecks: string = JSON.stringify(data);

    const images = [
        bakerDeck,
        elementDeck,
        girlDeck,
        blindDeck
    ];

    return (
        <div className='w-full'>
            {/* <div className='p-4'>
                <p>Product id: {params.productId} and article id: {params.reviewId}</p>
            </div>*/}
            {JSON.parse(bakerdecks).map((prod: DecksProps) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id} className='flex text-lg text-slate-200 bg-slate-50/10 px-5 py-4'>
                        <div className=''>
                            <Image src={prod.img} width={100} height={100} alt="img perID" 
                                className='object-cover rounded' />
                        </div>
                        <div className='flex flex-col items-start justify-center w-40'>
                            <p className='font-bold ml-4'>{prod.deckname.toUpperCase()}</p>
                            <p className='font-bold ml-4'>{prod.price.toFixed(2)}.- CHF</p>                
                        </div>
                    </div>
                ) : null
            ))}
            
            {reviews.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <div key={rev.id} className='p-4'>
                        
                        <h3 className='text-3xl text-transparent bg-clip-text
                          dark-title-h1 light-title-h1'
                        >
                            {rev.categories}
                        </h3>

                        <p className='text-md mt-2'>{rev.review}</p>



                        <div className='flex items-center justify-center mx-10 my-5'>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video} type="video/mp4" />
                                </video>
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video_2} type="video/mp4" />
                                </video>
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video_2} type="video/mp4" />
                                </video>
                                
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className='flex items-center justify-center mx-10 mt-5'>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video} type="video/mp4" />
                                </video>
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video_2} type="video/mp4" />
                                </video>
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full py-4'>
                                
                                <video autoPlay muted controls className='w-4/5 h-auto'>
                                    <source src={rev.video_2} type="video/mp4" />
                                </video>
                                
                                <div className='flex items-center justify-start w-4/5 text-sm text-slate-100
                                    py-2'>
                                    <span className='flex items-center justify-center text-sm font-bold px-[7px] 
                                        pt-[8px] pb-[5px] bg-red-600 ml-0 mr-3 rounded-full'>
                                        B1
                                    </span> 
                                    <p className='flex items-center justify-center text-sm mt-1'>
                                        Commentaire
                                    </p>
                                </div>

                            </div>

                        </div>




                    </div>
                ) : null
            ))}

            <div className='w-4/5 m-auto bg-slate-50/10 pt-10 pb-5'>
                <Carousel loop>
                    {images.map((src, i) => {
                    return (
                        <div key={i}
                        className="relative flex shrink-0 grow-0 xs:w-[100px] sm:w-[200px] md:w-[200px] 
                            xs:h-[100px] sm:h-[200px] md:h-[200px] sm:mx-[350px] lg:mx-[380px] 2xl:mx-[850px] 
                            sm:my-6 md:my-3"
                        >
                        <Image src={src} 
                            width={200} height={200} fill={false} 
                            className="m-auto" 
                            alt="img carousel"
                        />
                        </div>
                    );
                    })}
                </Carousel>
            </div>

        </div>
    )
}
