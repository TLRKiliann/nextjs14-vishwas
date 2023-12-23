import MainShop from '@/app/ui/products/main-shop';

type TitleProps = {
    id: number;
    title: string;
}

type LinksProps = {
    id: number;
    link: string;
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

            <div>
                <h1 className='text-4xl font-bold 
                    text-transparent bg-clip-text
                    dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
                    dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
                    bg-gradient-to-br from-violet-500 from-10% 
                    via-purple-500 via-50% to-violet-200 to-90%
                    p-4'
                >
                    Welcome to shop !
                </h1>
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

// Cannot invoke client function from server component
// const callingCompLessMore = DisplayerProducts(JSON.parse(data));
