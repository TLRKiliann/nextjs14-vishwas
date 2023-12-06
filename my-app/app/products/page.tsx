import { fetchProducts } from '@/app/lib/datas';
// import { ProductsProps } from '@/app/lib/definitions';
// import { products } from "@/app/lib/datas";
// import DropDownMenu from '@/app/ui/products/dropdown-menu';

//import lessMoreProducts from "@/app/ui/products/lessmore-products";


export default async function ListProducts() {

    const products = await fetchProducts();

    console.log(typeof(products), "+ products (1)")

    // Not stringify => one string !
    // const newProducts = JSON.stringify(products);

    let array: any[] = [];
    array.push(products)

    console.log(typeof(array), "+ concatTest (2)")

    const parsedData = JSON.parse(products);

    //{ Object.values(products).map((key, value) => key ) }

    // invoke client component
    // const productsFetched = lessMoreProducts(products); fetch qqch oui mais pas client comp

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <h2>Call test of products from MySQL db</h2>
                
                {/* JSON.stringify(products) */}

                {/* Object.values(products).map((d) => d) */}

                {parsedData.map((m: { name: string; }) => m.name)}

         </div>
    )
}


/*
                <div key={}>
                    <p>{}</p>
                    <p>{}</p>
                </div>

    const productsFetched = lessMoreProducts(products);

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <DropDownMenu />

            <div className='px-20 pt-2 pb-10'>

                {productsFetched}
                <LessMoreProducts newProducts={newProducts} />
            </div>
         </div>
*/