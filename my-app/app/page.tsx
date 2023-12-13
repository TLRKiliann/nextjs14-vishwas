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

import boxCpu from "@/public/img_cpu/box_cpu.jpg";
import boxCpui7 from "@/public/img_carousel/box-corei7.png";
import boxCpui9 from "@/public/img_carousel/box-corei9.png";
import dualBox from "@/public/img_carousel/dual-box.png";
import multiBox from "@/public/img_carousel/multi-box.png";
import wallPerf from '@/public/img_bg/wall-i9.jpg';

export default function Home() {
  
  const images = [
    dualBox,
    boxCpui7,
    boxCpui9,
    multiBox
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
          src={boxCpu}
          width={1192}
          height={671}
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
              NextJS Tutorial
            </h1>
            <p className='text-lg text-blue-800 font-bold text-transparent bg-clip-text 
              light-bg-gradient dark-bg-gradient drop-shadow-lg m-auto mt-0'
            >
              All features includes
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
            Welcome to shop !
          </h2>
        </div>
        
        <div className='w-full h-[360px] bg-slate-200/80 dark:bg-blue-100/80'>

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

          <legend className='text-sm text-blue-800 text-center my-4'>
            Core i9 X-SERIES & Core i9 EXTREME
          </legend>
        
        </div>

        <div className='w-full h-20 dark:bg-slate-900 bg-slate-100'>
        </div>

        <div className='flex w-full'>

          <div className='w-[160px] h-auto bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='flex w-full h-auto bg-transparent dark:bg-slate-900'>
            <Image
              src={wallPerf}
              width={1485}
              height={823}
              alt="wall perf" 
              className='object-cover opacity-80 dark:opacity-90'
            />
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
