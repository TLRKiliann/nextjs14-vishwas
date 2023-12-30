import Image from 'next/image';
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
import funnyRabbit from "@/public/img_bg/lapin-slide-cut.png";

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
          dark:bg-cyan-50 bg-slate-50 border border-slate-100 dark:border-b-blue-200
          shadow-xllight z-10"
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
          bg-indigo-100
          shadow-xllight mt-40 z-0'
        >
          <h2 className='text-2xl font-bold m-auto text-transparent bg-clip-text

            dark:bg-gradient-to-br dark:from-slate-500 dark:from-10% 
            dark:via-cyan-200 dark:via-40% dark:to-slate-500 dark:to-90%
            dark:drop-shadow-lg 
            bg-gradient-to-br from-indigo-500 from-10% 
            via-indigo-400 via-40% to-indigo-500 to-90%
     
            drop-shadow-lg transition animate-slice-appear'
          >
            Take a look !
          </h2>
        </div>
        
        <Separator />

          <TextBlocks title={titleOne} text={textOne} />

        <Separator />

        <div className='flex'>

          <div className='flex-1 bg-slate-900'>
          </div>

          <div className='w-4/5 h-[440px] bg-slate-200/80 dark:bg-blue-100/80'>

            <Carousel loop>
              {images.map((src, i) => {
                return (
                  <div 
                    key={i}
                    className="relative flex shrink-0 grow-0 xs:w-[100px] sm:w-[200px] md:w-[300px] 
                      xs:h-[100px] sm:h-[200px] md:h-[300px] sm:mx-[350px] lg:mx-[380px] 2xl:mx-[850px] 
                      mt-9 mb-0"
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

          <div className='flex-1 bg-slate-900'>
          </div>
        </div>

        <Separator />

          <TextBlocks title={titleOne} text={textOne} />

        <Separator />

        <div className="flex justify-center">

          <div className='flex-1 bg-slate-900'>
          </div>

          <div className='w-4/5'>
            {/* autoPlay muted loop */}
            <video className='w-full h-auto'>
              <source src="/video/skate-trick2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className='flex-1 bg-slate-900'>
          </div>

        </div>

        <Separator />

          <TextBlocks title={titleOne} text={textOne} />

        <Separator />

        <div className='flex w-full'>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='flex align-center justify-around w-4/5 m-auto shadow-inviolet dark:shadow-in py-10'>

            <SectionImgOne />

            <SectionTextColorBlock titleBox={titlebox_1} textBox={textbox_1} />

          </div>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <Separator />

          <TextBlocks title={titleTwo} text={textTwo} />

        <Separator />

        <div className='flex w-full'>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='flex align-center justify-around w-4/5 m-auto shadow-inviolet dark:shadow-in py-10'>

            <SectionTextColorBlock titleBox={titlebox_2} textBox={textbox_2} />

            <SectionImgTwo />

          </div>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <Separator />

          <TextBlocks title={titleThree} text={textThree}>
            <SocialIcons />
          </TextBlocks>

        <Separator />

        <div className='flex'>

          <div className='flex-1 h-auto bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='flex xs:w-1/5 md:w-2/5 xl:w-3/5 h-auto bg-transparent rounded-xl'>

            <div className='relative flex flex-col items-center justify-center z-10'>

              <div className='absolute top-0 left-0 flex flex-col items-center justify-center 
                w-full h-full text-center sm:text-2xl md:text-4xl xl:text-8xl font-bold
                text-slate-50 bg-sky-800/10 z-40'>

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

              <div className="absolute bottom-0 right-0 z-30">
                <Image src={funnyRabbit} width={666} height={375} alt="lapin cretin" 
                  className="object-cover" />
              </div>

            </div>

          </div>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

        </div>

      </main>

    </div>
  )
}
