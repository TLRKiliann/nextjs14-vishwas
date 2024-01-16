import type { Metadata } from 'next';
import type { TitlesProps, LinksProps } from '@/app/lib/definitions';
import Image from 'next/image';
import SearchUrl from '@/app/ui/products/search-url';
import MainShop from '@/app/ui/products/main-shop';
import bgProducts from '@/public/img_bg/sunset-board.jpg';
import { titles, links } from '@/app/lib/product-list';

export const metadata: Metadata = {
    title: "Products",
    description: "access accepted"
}

export default function ListProducts() {

    if (!titles || !links) {
        throw new Error("Error: some troubles with titles or links from products page !");
    };

    return (
        <div className="w-full min-h-screen bg-slate-100 dark:bg-slate-900 py-[75px]">

            <div className='-z-10'>
                <Image
                    src={bgProducts}
                    width={1920}
                    height={1080}
                    alt="img sunset"
                    className="fixed opacity-50 object-cover"
                />
            </div>

            <div>
                <h1 className='relative text-4xl font-bold text-transparent bg-clip-text dark-title-h1
                    bg-gradient-to-br from-violet-500 from-10% 
                    via-purple-500 via-50% to-violet-200 to-90%
                    p-4'
                >
                    Welcome to shop !
                </h1>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full mt-4">
                <SearchUrl placeholder="Search by product name..." />
            </div>

            {titles.map((tName: TitlesProps) => (
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
