import type { Metadata } from 'next';
// import Link from 'next/link';

type ParamsProps = {
    productId: string;
}

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Baker: ${params.productId}`)
        }, 300)
    })
    return {
        title: `Reviews ${title}`
    }
}

export default async function DetailsProduct({children, params}: 
    {children: React.ReactNode, params: ParamsProps}
    ) {
    return (
        <div>
            <p>{params.productId}</p>
            {children}
        </div>
    )
}