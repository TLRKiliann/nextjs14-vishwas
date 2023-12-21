import Image from 'next/image';
import Link from 'next/link';
import { allTitle, allText } from '@/app/lib/datas';
import Links from '@/app/ui/home/links';
import Carousel from '@/app/ui/carousel';
import ScrollIndicator from '@/app//ui/scroll-indicator';
import SocialIcons from '@/app/ui/home/social-icons';
import TextBlocks from '@/app/ui/home/text-blocs';
import SectionTextColorBlock from '@/app/ui/home/sectionTextColorBlock';
import SectionImgOne from '@/app/ui/home/sectionImgOne';
import SectionImgTwo from '@/app/ui/home/sectionImgTwo';
import Separator from '@/app/ui/home/separator';
import allanFranca from "@/public/img_bg/allan-franca-carmo.jpg";
import elementDeck from "@/public/img_carousel/deck_element9.png";
import girlDeck from "@/public/img_carousel/deck_girl2.png";
import bakerDeck from "@/public/img_carousel/deck_baker5.png";
import blindDeck from "@/public/img_carousel/deck_blind6.png";
import skaterFly from '@/public/img_bg/skater_fly.jpg';

export default function Home() {
  
  const images = [
    bakerDeck,
    elementDeck,
    girlDeck,
    blindDeck
  ];

  const titleOne: string = allTitle.titleOne;
  const titleTwo: string = allTitle.titleTwo;
  const titleThree: string = allTitle.titleThree;
  const titlebox_1: string = allTitle.titlebox_1;
  const titlebox_2: string = allTitle.titlebox_2;

  const textOne: string = allText.textOne;
  const textTwo: string = allText.textTwo;
  const textThree: string = allText.textThree;
  const textbox_1: string = allText.textbox_1;
  const textbox_2: string = allText.textbox_2;

  return (
    <div className='relative flex text-slate-600 bg-black z-0 py-[70px]'>
      
      <ScrollIndicator />
      
      <div className='fixed flex align-center justify-center w-full h-full 
        filter blur-sm contrast-200 m-auto animate-slice-appear -z-10'>
        <Image
          src={allanFranca}
          width={1920}
          height={1280}
          alt="cpu img" 
          className='flex w-full h-auto m-auto object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div className="absolute mt-0 flex flex-col align-center justify-center w-full h-40 
          dark:bg-cyan-50 bg-slate-50
          border border-purple-200 dark:border-b-blue-200 shadow-xllight z-10"
        >
          
          <div className='flex flex-col h-40'>
            <p className='text-xl text-blue-800 font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-lg m-auto mb-0'
            >
              The
            </p>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-lg m-auto my-0'
            >
              Skateboard-Shop
            </h1>
            <p className='text-lg text-blue-800 font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-lg m-auto mt-0'
            >
              Decks - Trucks - Wheels
            </p>
          </div>

          <Links />

        </div>

        <div className='relative flex align-center justify-center h-12 
          dark:text-slate-50 text-cyan-600
          dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
          dark:via-sky-400 dark:via-40% dark:to-slate-900 dark:to-90%
          bg-gradient-to-r from-violet-400 from-10% 
          via-slate-50 via-30% to-violet-400 to-90%
          shadow-xllight mt-40 z-0'
        >
          <h2 className='text-2xl font-bold m-auto text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-slate-500 dark:from-10% 
            dark:via-cyan-200 dark:via-40% dark:to-slate-500 dark:to-90%
            dark:drop-shadow-lg
            bg-gradient-to-br from-purple-600 from-10% 
            via-purple-400 via-50% to-purple-600 to-90% drop-shadow-lg
            transition animate-slice-appear'
          >
            Latest Decks
          </h2>
        </div>
        
        <div className='w-full h-[440px] bg-slate-200/80 dark:bg-blue-100/80 border border-green-400'>

          <Carousel loop>
            {images.map((src, i) => {
              return (
                <div 
                  key={i}
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

          <Link href="/products" className='flex justify-center text-sm 
            text-blue-600 hover:text-blue-800 my-4'>
            Watch more in our shop !
          </Link>
        
        </div>

        <div className='w-full h-20 dark:bg-slate-900 bg-slate-100'>
        </div>

        <div className='flex w-full'>

          <div className='w-[160px] h-auto bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='flex w-full h-auto bg-transparent rounded-xl'>

            <div className='relative flex flex-col items-center justify-center z-10'>

              <div className='absolute top-0 left-0 flex flex-col align-items justify-center 
                w-full h-full text-center sm:text-4xl lg:text-6xl xl:text-8xl font-bold
                text-slate-50 bg-sky-800/20 z-20'>

                <p className='[text-shadow:1px_5px_2px_#222] rotate-12 sm:my-8 md:my-6 xl:my-4'>
                  Ride to be live
                </p>
                <p className='[text-shadow:1px_5px_2px_#222] rotate-12 sm:my-8 md:my-6 xl:my-4'>
                  &
                </p>
                <p className='[text-shadow:1px_5px_2px_#222] rotate-12 sm:my-8 md:my-6 xl:my-4'>
                  Live to be ride !
                </p>

              </div>
              
              <Image
                src={skaterFly}
                width={1920}
                height={1260}
                alt="skater fly" 
                className='object-cover opacity-90 rounded-t-full shadow-lg z-10'
              />

            </div>
          </div>

          <div className='w-[160px] bg-slate-100 dark:bg-slate-900'>
          </div>

        </div>

        <Separator />

        <TextBlocks title={titleOne} text={textOne} />

        <Separator />

        <div className='flex w-full'>

          <div className='w-[160px] h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='flex align-center justify-around w-full m-auto shadow-inviolet dark:shadow-in py-10'>

            <SectionImgOne />

            <SectionTextColorBlock titleBox={titlebox_1} textBox={textbox_1} />

          </div>

          <div className='w-[160px] h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <Separator />

        <TextBlocks title={titleTwo} text={textTwo} />

        <Separator />

        <div className='flex w-full'>

          <div className='w-[160px] h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='flex align-center justify-around w-full m-auto shadow-inviolet dark:shadow-in py-10'>

            <SectionTextColorBlock titleBox={titlebox_2} textBox={textbox_2} />

            <SectionImgTwo />

          </div>

          <div className='w-[160px] h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <Separator />

        <TextBlocks title={titleThree} text={textThree}>
          <SocialIcons />
        </TextBlocks>

        <Separator />

      </main>

    </div>
  )
}
