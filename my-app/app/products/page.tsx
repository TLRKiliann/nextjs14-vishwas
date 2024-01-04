import { Metadata } from 'next';
import Image from 'next/image';
import SearchUrl from '@/app/ui/products/search-url';
import MainShop from '@/app/ui/products/main-shop';
import bgProducts from '@/public/img_bg/sunset-board.jpg';

type TitleProps = {
    id: number;
    title: string;
}

type LinksProps = {
    id: number;
    link: string;
}

export const metadata: Metadata = {
    title: "Products",
    description: "access accepted"
}

export default function ListProducts() {

    const titles: TitleProps[] = [
        {
            id: 1,
            title: "Decks"
        },
        {
            id: 2,
            title: "Wheels"
        },
        {
            id: 3,
            title: "Trucks"
        }
    ];

    const links: LinksProps[] = [
        {
            id: 1,
            link: "/products/decks"},
        {
            id: 2,
            link: "/products/wheels"},
        {
            id: 3,
            link: "/products/trucks"}
    ];

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-[75px]">

            <div className='-z-10'>
                <Image
                    src={bgProducts}
                    width={1920}
                    height={1080}
                    alt="img sunset"
                    className="fixed opacity-20 object-cover"
                />
            </div>

            <div>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1
                    bg-gradient-to-br from-violet-500 from-10% 
                    via-purple-500 via-50% to-violet-200 to-90%
                    p-4'
                >
                    Welcome to shop !
                </h1>
            </div>

            <div className="relative flex flex-col w-full mt-4">
                <SearchUrl placeholder="ex: baker 1, or element 3, ..." />
            </div>

            {titles.map((tName: TitleProps) => (
                links.map((lName: LinksProps) => {
                    if (lName.id === tName.id) {
                        return (
                            <MainShop key={tName.id} link={lName.link}>
                                {tName.title}
                            </MainShop>
                        )
                    }
                })
            ))}
        </div>
    )
}
