import Image from 'next/image';
import { allTitle, allText } from '@/app/lib/datas';
import Links from '@/app/ui/home/links';
import Carousel from '@/app/ui/carousel';
import ScrollIndicator from '@/app//ui/scroll-indicator';
import SocialIcons from '@/app/ui/home/social-icons';
import TextBlocks from '@/app/ui/home/text-blocs';
import TextBlockDesign from '@/app/ui/home/text-bloc-design';
import SectionTextColorBlock from '@/app/ui/home/sectionTextColorBlock';
import SectionImgOne from '@/app/ui/home/sectionImgOne';
import SectionImgTwo from '@/app/ui/home/sectionImgTwo';
import Separator from '@/app/ui/home/separator';
import skaterBg from "@/public/img_bg/skate-trick-park.jpg";
import allan from "@/public/img_bg/pexels-allan-mas.jpg";
import sunSet from "@/public/img_bg/sunset-board.jpg";
import allanFranca from "@/public/img_bg/allan-franca-carmo.jpg";
import elementDeck from "@/public/img_carousel/deck_element9.png";
import girlDeck from "@/public/img_carousel/deck_girl2.png";
import bakerDeck from "@/public/img_carousel/deck_baker5.png";
import blindDeck from "@/public/img_carousel/deck_blind6.png";
import skaterFly from '@/public/img_bg/skater_fly_title.png';
import funnyRabbit from "@/public/img_bg/lapin-slide-cut.png";
import deckTitle from '@/public/img_decks/deck-h.png';
import bgPark from '@/public/img_bg/bg-park-title.jpg';

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
      
      <div className='fixed flex align-center justify-center w-full h-full filter blur-sm contrast-200 m-auto
        animate-slice-appear -z-10'>
        <Image
          src={skaterBg}
          width={1920}
          height={1080}
          alt="cpu img" 
          className='object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div className="flex flex-col align-center justify-center w-full
          dark:bg-cyan-50 bg-slate-50 border-b border-indigo-200 dark:border-blue-200
          shadow-xllight my-0 z-10"
        >

          <div className='flex flex-col py-[100px]'>
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

          <div className="absolute flex justify-center w-full mb-10 -z-10">
            <div className='w-[550px] h-auto'>
              <Image src={deckTitle} width={550} height={200} alt="img title"
                className='object-cover' />
            </div>
          </div>

          <div className="absolute flex justify-end w-full mb-0 mr-0">
            <div className="w-[440px] h-auto">
              <Image src={funnyRabbit} width={666} height={375} alt="img lapin"
                className="object-cover transition animate-slice-appear" />
            </div>
          </div>

          <div className="absolute flex justify-start w-full mb-0">
            <div className="w-[400px] h-auto transform transition translate-y-0 animate-up-start">
              <Image src={skaterFly} width={1920} height={1260} alt="img skaterFly"
                className="object-cover" />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full -z-30">
            <div className="flex w-full h-[407px]">
              <Image src={bgPark} width={2560} height={1709} alt="img bgPark" 
                className="object-cover opacity-50" />
            </div>
          </div>

          <Links />

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
            dark:drop-shadow-lg 
            bg-gradient-to-br from-indigo-500 from-10% 
            via-indigo-400 via-40% to-indigo-500 to-90%
            drop-shadow-lg transition animate-slice-appear'
          >
            Take a look !
          </h2>
        </div>

        <TextBlocks title={titleOne} text={textOne} />
        <Separator />

        <div className='flex'>

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

          <div className='w-4/5 h-[440px] bg-slate-200/80 dark:bg-sky-700/70'>

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

          <div className='flex-1 bg-slate-100 dark:bg-slate-900'>
          </div>

        </div>

        <Separator />

          <TextBlockDesign title={titleTwo} text={textTwo} />

        <Separator />

        <div className='flex  w-full'>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

          <div className='relative flex items-center justify-center w-4/5 h-[400px] bg-slate-100/50 
            shadow-inviolet dark:bg-sky-700/70'>

            <div className='absolute sm:mr-[460px] xl:left-[140px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
              ml-2 rotate-[15deg] z-20'>
              <Image src={allan} width={1920} height={1280} alt="img photo" className='object-cover rounded-xl' />
            </div>

            <div className='absolute sm:ml-[20px] xl:ml-[20px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
              rotate-[15deg] z-10'>
              <Image src={sunSet} width={1920} height={1280} alt="img photo" className='object-cover rounded-xl' />
            </div>
  
            <div className='absolute sm:ml-[500px] xl:ml-[700px] sm:w-[300px] sm:h-auto xl:w-[400px] xl:h-auto 
              mr-2 rotate-[15deg] z-0'>
              <Image src={allanFranca} width={1920} height={1280} alt="img photo" className='object-cover rounded-xl' />
            </div>

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

            <SectionImgOne />

            <SectionTextColorBlock titleBox={titlebox_1} textBox={textbox_1} />

          </div>

          <div className='flex-1 h-auto dark:bg-slate-900 bg-slate-100'>
          </div>

        </div>

        <Separator />

          <TextBlocks title={titleThree} text={textThree} />

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

          <TextBlocks title={titleFour} text={textFour}>
            <SocialIcons />
          </TextBlocks>

        <Separator />

      </main>

    </div>
  )
}
