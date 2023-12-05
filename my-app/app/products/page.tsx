import callProducts from '@/app/lib/actions';
// import { products } from "@/app/lib/datas";
// import DropDownMenu from '@/app/ui/products/dropdown-menu';
// import lessMoreProducts from "@/app/ui/products/lessmore-products";

export default async function ListProducts() {

    const products = await callProducts("SELECT * FROM products", [])

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <h2>Call test of products from MySQL db</h2>
            {JSON.stringify(products)}
         </div>
    )
}


/*
    const productsFetched = lessMoreProducts(products);

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <DropDownMenu />

            <div className='px-20 pt-2 pb-10'>

                {productsFetched}

            </div>
         </div>
*/