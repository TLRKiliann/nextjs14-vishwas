"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';
import { allTitle, allText } from '@/app/lib/datas';
import Carousel from '@/app/ui/carousel';
import ScrollIndicator from '@/app/ui/scroll-indicator';
import SocialIcons from '@/app/ui/home/social-icons';
import TextBlocks from '@/app/ui/home/text-blocs';
import TextBlockDesign from '@/app/ui/home/text-bloc-design';
import SectionTextColorBlock from '@/app/ui/home/sectionTextColorBlock';
import SectionImgOne from '@/app/ui/home/sectionImgOne';
import SectionImgTwo from '@/app/ui/home/sectionImgTwo';
import Separator from '@/app/ui/home/separator';
import skaterBg from "@/public/img_bg/skate-ride.jpg";
import allan from "@/public/img_bg/pexels-allan-mas.jpg";
import sunSet from "@/public/img_bg/sunset-board.jpg";
import allanFranca from "@/public/img_bg/allan-franca-carmo.jpg";
import elementDeck from "@/public/img_carousel/deck_element9.png";
import girlDeck from "@/public/img_carousel/deck_girl2.png";
import bakerDeck from "@/public/img_carousel/deck_baker5.png";
import blindDeck from "@/public/img_carousel/deck_blind6.png";
import skaterFly from '@/public/img_bg/skater_fly_title.png';
import deckTitle from '@/public/img_decks/deck-h.png';
import bgPark from '@/public/img_bg/bg-park-title.jpg';
import skateTrix from '@/public/img_bg/skate-trick-park.jpg';
import skateSleep from '@/public/img_bg/skate-sleep.jpg';

export default function Home() {

  const inputRef = useRef(null);

  const parallaxController = useParallaxController();

  const images = [
    bakerDeck,
    elementDeck,
    girlDeck,
    blindDeck
  ];

  const titleOne: string = allTitle.titleOne;
  const titleTwo: string = allTitle.titleTwo;
  const titleThree: string = allTitle.titleThree;
  const titleFour: string = allTitle.titleFour;
  const titlebox_1: string = allTitle.titlebox_1;
  const titlebox_2: string = allTitle.titlebox_2;

  const textOne: string = allText.textOne;
  const textTwo: string = allText.textTwo;
  const textThree: string = allText.textThree;
  const textFour: string = allText.textFour;
  const textbox_1: string = allText.textbox_1;
  const textbox_2: string = allText.textbox_2;

  return (
    <div className='relative flex text-slate-600 bg-black pt-[75px] pb-[20px] z-0'>
      
      <ScrollIndicator />
      
      <Parallax speed={-5} translateY={['-200px', '300px']} className='fixed -z-10'>
        <Image
          ref={inputRef}
          src={skaterBg}
          width={1920}
          height={1080}
          alt="cpu img"
          onLoad={() => parallaxController?.update()}
          className='w-full h-auto pb-40 transition animate-slice-appear object-cover'
        />
      </Parallax>

      <Parallax speed={-5} translateY={['4200px', '0px']} className='fixed -z-10'>
        <Image
          ref={inputRef}
          src={allan}
          width={1920}
          height={1080}
          alt="cpu img"
          className='w-full h-auto filter blur-xs contrast-200 object-cover'
        />
      </Parallax>

      <main className="flex flex-col w-full min-h-screen">

        <div className="flex flex-col items-center justify-center w-full
          dark:bg-cyan-50 bg-slate-50 border-b border-indigo-200 dark:border-blue-200
          shadow-xllight my-0 z-10"
        >

          <div className='flex flex-col items-center justify-center py-[120px]'>
            <p className='text-xl text-blue-800 font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-fontlg m-auto'
            >
              The
            </p>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-fontlg m-auto'
            >
              Skateboard-Shop
            </h1>
            <p className='text-lg text-blue-800 font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-fontlg m-auto mt-0'
            >
              Decks - Trucks - Wheels
            </p>
          </div>

          <Image src={deckTitle} width={550} height={200} alt="img title"
            className='absolute flex items-center justify-center w-[550px] h-auto mb-0 object-cover -z-10' />

          <Image src={skaterFly} width={1920} height={1260} alt="img skaterFly"
            className="absolute left-0 w-[400px] h-auto mb-0 object-cover transition transform 
              translate-y-0 animate-up-start" />

          <Image src={bgPark} width={2560} height={1709} alt="img bgPark" 
            className="absolute top-0 left-0 flex w-full h-[412px] object-cover opacity-70 -z-30 " />

        </div>

        <div className='flex align-center justify-center h-12 
          dark:text-slate-50 text-cyan-600
          dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
          dark:via-sky-400 dark:via-40% dark:to-slate-900 dark:to-90%
          bg-indigo-100 shadow-xllight mt-0 z-0'
        >
          <h2 className='text-2xl font-bold m-auto text-transparent bg-clip-text
            dark:bg-gradient-to-br dark:from-slate-500 dark:from-10% 
            dark:via-cyan-200 dark:via-40% dark:to-slate-500 dark:to-90%
            dark:drop-shadow-fontlg 
            bg-gradient-to-br from-indigo-500 from-10% 
            via-indigo-400 via-40% to-indigo-500 to-90%
            drop-shadow-fontlg transition animate-slice-appear'
          >
            Take a look !
          </h2>
        </div>

        <div className='w-full h-10 bg-slate-100 dark:bg-slate-900'></div>

        <div className='flex w-full h-auto m-auto shadow-inviolet dark:shadow-in'>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='w-4/5 h-content font-bold font-serif text-white bg-violet-400/50 dark:bg-sky-700/70 m-4 rounded'>
            
            <h2 className='text-2xl px-4 py-2 pt-3 rounded-tl-md rounded-tr-md'>
              Links
            </h2>
            
            <hr className='w-[300px] border-1 border-slate-100/50 mx-4 rounded-full'/>

            <ol className='flex flex-col items-start justify-start py-2 rounded'>
              
              <li className='list-disc hover:text-violet-200 dark:hover:text-sky-400 ml-10 p-0'>
                <a href='#high-quality'
                  className='block overscroll-y-auto text-md shadow-fontlg active:text-blue-200 pt-2'>
                  High Quality
                </a>
              </li>
              
              <li className='list-disc hover:text-violet-200 dark:hover:text-sky-400 ml-10 p-0'>
                <a href='#choose-wisely'
                  className='block text-md shadow-fontlg active:text-blue-200'>
                  Choose Wisely
                </a>
              </li>

              <li className='list-disc hover:text-violet-200 dark:hover:text-sky-400 ml-10 p-0'>
                <a href='#allwhatyouneed'
                  className='block text-md shadow-fontlg active:text-blue-200'>
                  All what you need !
                </a>
              </li>

              <li className='list-disc hover:text-violet-200 dark:hover:text-sky-400 ml-10 p-0'>
                <a href='#network'
                  className='block text-md shadow-fontlg active:text-blue-400 pb-2
                    rounded-bl-md rounded-br-md'>
                  Social Network
                </a>
              </li>

            </ol>

          </div>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'></div>

        </div>

        <TextBlocks title={titleOne} text={textOne} />
        <Separator />

        <div className='flex'>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='w-4/5 h-[440px] bg-slate-100/50 dark:bg-sky-700/70 shadow-inviolet dark:shadow-in'>

            <Carousel loop>
              {images.map((src, i) => {
                return (
                    <Image key={i} src={src} 
                      width={300} height={300} fill={false} 
                      className="relative flex shrink-0 grow-0 xs:w-[100px] sm:w-[200px] md:w-[300px] 
                      xs:h-[100px] sm:h-[200px] md:h-[300px] m-auto sm:mx-[350px] lg:mx-[380px] 2xl:mx-[850px] 
                      mt-9 mb-0" 
                      alt="img carousel"
                    />
                );
              })}
            </Carousel>

          </div>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

        </div>

        <div id="high-quality">
          <Separator />

            <TextBlockDesign text={textTwo} />

          <Separator />
        </div>

        <div id="targetElement" className='flex  w-full'>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='relative flex items-center justify-center w-4/5 h-[400px] bg-slate-100/50 
            shadow-inviolet dark:bg-sky-700/70 dark:shadow-in'>

            <Image src={allan} width={1920} height={1280} alt="img photo" 
              className='absolute sm:mr-[460px] xl:left-[140px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
                object-cover ml-2 rotate-[15deg] rounded-xl z-20' />

            <Image src={sunSet} width={1920} height={1280} alt="img photo" 
              className='absolute sm:ml-[20px] xl:ml-[20px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
                object-cover rounded-xl rotate-[15deg] z-10' />

            <Image src={allanFranca} width={1920} height={1280} alt="img photo" 
              className='absolute sm:ml-[500px] xl:ml-[700px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
              mr-2 object-cover rounded-xl rotate-[15deg] z-0' />

          </div>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <div id="choose-wisely">
          <Separator />

            <TextBlocks title={titleTwo} text={textTwo} />

          <Separator />
        </div>

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

        <div id="allwhatyouneed">
          <Separator />

            <TextBlocks title={titleThree} text={textThree} />

          <Separator />
        </div>

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

        <div id="network">
          <Separator />
            <TextBlocks title={titleFour} text={textFour}>
              <SocialIcons />
            </TextBlocks>
          <Separator />
        </div>

      </main>

    </div>
  )
}
