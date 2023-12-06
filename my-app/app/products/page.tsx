import { fetchProducts } from '@/app/lib/datas';
import { ProductsProps } from '@/app/lib/definitions';
// import { products } from "@/app/lib/datas";
// import DropDownMenu from '@/app/ui/products/dropdown-menu';

import LessMoreProducts from "@/app/ui/products/lessmore-products";

type ProdProps = {
    products: ProductsProps[];
}

export default async function ListProducts() {

    const data: string = await fetchProducts();
    const products: ProductsProps[] = JSON.parse(data);

    // const { id, name, price, img, stock } = data

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <h2>Call test of products from MySQL db</h2>
                
            <div>
                {/* <DropDownMenu /> */ }
            </div>

                {/* JSON.stringify(products) */}

            <div className='px-20 pt-2 pb-10'>
                <LessMoreProducts products={products} />
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
                <LessMoreProducts newProducts={newProducts} />
            </div>
         </div>
*/