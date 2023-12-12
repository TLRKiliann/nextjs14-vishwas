import { executeQuery } from '@/app/lib/db';
import DropDownMenu from '@/app/ui/products/dropdown-menu';
import DisplayerProducts from "@/app/ui/products/displayer-products";

export default async function ListProducts() {

    const data: unknown = await executeQuery("SELECT * FROM products", []);
    const products: string = JSON.stringify(data);

    if (!products) {
        throw new Error("Error: myabe connection failed");
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-[75px]">
             
            <div>
                <DropDownMenu products={JSON.parse(products)} />
            </div>
               
            <div className='px-20 pt-2 pb-10'>
                <DisplayerProducts products={JSON.parse(products)} />
            </div>
            
        </div>
    )
}

// Cannot invoke client function from server component
// const callingCompLessMore = DisplayerProducts(JSON.parse(data));
