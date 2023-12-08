import { fetchProducts } from '@/app/lib/datas';
import { ProductsProps } from '@/app/lib/definitions';
// import { products } from "@/app/lib/datas";
import DropDownMenu from '@/app/ui/products/dropdown-menu';
import DisplayerProducts from "@/app/ui/products/displayer-products";

export default async function ListProducts() {

    const data = await fetchProducts();
    const products: ProductsProps[] = JSON.parse(data);

    // Cannot invoke client function from server component
    // const callingCompLessMore = DisplayerProducts(JSON.parse(data));

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
             
            <div>
                <DropDownMenu products={products} />
            </div>
               
            <div className='px-20 pt-2 pb-10'>
                <DisplayerProducts products={products} />
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