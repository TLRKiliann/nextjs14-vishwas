import { callProducts } from '@/app/lib/actions';
//import { ProductsProps } from '@/app/lib/definitions';
//import { products } from "@/app/lib/datas";
// import DropDownMenu from '@/app/ui/products/dropdown-menu';
import lessMoreProducts from "@/app/ui/products/lessmore-products";
import { fetchProducts } from '../lib/datas';

export default async function ListProducts() {

    const productsCall = await callProducts("SELECT * FROM products", []);
    const newProducts = JSON.stringify(productsCall);

    //const products = await fetchProducts(data)

    // invoke client component
    // const productsFetched = lessMoreProducts(products); fetch qqch oui mais pas client comp

    // console.log(newProducts)

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <h2>Call test of products from MySQL db</h2>
                <p>
                    {Object.values(newProducts).map((prod) => prod)}
                </p>

         </div>
    )
}


/*
    const productsFetched = lessMoreProducts(products);

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <DropDownMenu />

            <div className='px-20 pt-2 pb-10'>

                {productsFetched}
                <LessMoreProducts newProducts={newProducts} />
            </div>
         </div>
*/