import Link from 'next/link'

type ProductProps = {
    id: number;
    name: string;
    color: string;
}

export default function ListProducts() {

    const products: ProductProps[] = [
        {
            id: 1,
            name: "apples",
            color: "red"
        },
        {
            id: 2,
            name: "banana",
            color: "yellow"
        },
        {
            id: 3,
            name: "orange",
            color: "orange"
        }
    ];
    // 2 params ne fonctionnent pas dans une même URL !!!
    return (
        <>
            <h1 className='m-4'>List of products</h1>

            <div className="flex flex-col m-10">
                {products.map((prod) => (
                    <div key={prod.id}>
                        <p>
                            <Link 
                                href={`/products/${prod.id}`}
                                className="text-slate-200 hover:text-emerald-400"    
                            >
                                {prod.name}
                            </Link>
                        </p>
                        <p>
                            <Link 
                                href={`/products/${prod.id}/reviews`}
                                className="text-slate-200 hover:text-blue-400"
                            >    
                                reviews
                            </Link>
                        </p>
                    </div>
                ))}
            </div>

        </>
    )
}