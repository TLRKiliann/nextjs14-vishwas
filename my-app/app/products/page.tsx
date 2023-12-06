import { fetchProducts } from '@/app/lib/datas';
import { ProductsProps } from '@/app/lib/definitions';
// import { products } from "@/app/lib/datas";
// import DropDownMenu from '@/app/ui/products/dropdown-menu';
import LessMoreProducts from "@/app/ui/products/lessmore-products";
//import DropDownMenu from '../ui/products/dropdown-menu';

export default async function ListProducts() {

    const data = await fetchProducts();
    const products: ProductsProps[] = JSON.parse(data);

    // Cannot invoke client component from server component
    const callingCompLessMore = LessMoreProducts(JSON.parse(data));

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <h2>Call test of products from MySQL db</h2>
                
            <div>
                {/* <DropDownMenu>{...products}</DropDownMenu> */}
            </div>
               
            <div className='px-20 pt-2 pb-10'>
                {/*products.map((prod) => (*/}
                    {callingCompLessMore}
                {/*))}*/}
            </div>
            
        </div>
    )
}


/*

    const productsFetched = lessMoreProducts(products);

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <DropDownMenu />

            <div className='px-20 pt-2 pb-10'>

                {productsFetched}
                 <LessMoreProducts products={products} />
            </div>
         </div>
*/