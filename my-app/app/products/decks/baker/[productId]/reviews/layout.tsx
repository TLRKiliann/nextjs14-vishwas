import type { Metadata } from 'next';

type Props = {
    params: {
        productId: string;
    }
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Baker: ${params.productId}`)
        }, 300)
    })
    return {
        title: `Reviews ${title}`
    }
};

export default async function DetailsProduct({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
};