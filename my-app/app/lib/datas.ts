import { ProductsProps } from "./definitions";
import { ReviewsProps } from "./definitions";
import { CustomersProps } from "./definitions";
import { AllTitlesProps, AllTextProps } from "./definitions";
// import { unstable_noStore as noStore } from 'next/cache';

export const products: ProductsProps[] = [
    {
        id: 1,
        name: "Core i9",
        img: "/img_cpu/cpu-i9.png",
        price: 1230,
        stock: 23
    },
    {
        id: 2,
        name: "Core i7",
        img: "/img_cpu/cpu_i7.jpg",
        price: 1130,
        stock: 2
    },
    {
        id: 3,
        name: "Core i5",
        img: "/img_cpu/cpu_i5.jpg",
        price: 1030,
        stock: 11
    },
    {
        id: 4,
        name: "Core i3",
        img: "/img_cpu/cpu_i3.jpg",
        price: 1230,
        stock: 4
    },
    {
        id: 5,
        name: "Pentium",
        img: "/img_cpu/pentium.jpg",
        price: 1130,
        stock: 12
    },
    {
        id: 6,
        name: "Athalon",
        img: "/img_cpu/athalon.jpg",
        price: 1030,
        stock: 23
    }
];

/*
export async function fetchAllProducts() {
    // Add noStore() here prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a reponse for demo purposes.
      // Don't do this in real life :)
      console.log('Fetching revenue data...');
      //await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data: ProductsProps[] = await products;
      console.log('Data fetch complete!');
  
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}
*/

export const reviews: ReviewsProps[] = [
    {
        id: 1,
        categories: "Last article about cpu i9",
        review: "little text to display something (cpu-i9)"
    },
    {
        id: 2,
        categories: "Last article about cpu i7",
        review: "little text to display something (cpu-i7)"
    },
    {
        id: 3,
        categories: "Last article about cpu i5",
        review: "little text to display something (cpu-i5)"
    }
];

const customers: CustomersProps[] = [
    { 
        id: "1",
        name: "James",
        email: "james@mail.com",
        date: "2023-07-31",
        amount: 22,
        status: "pending"
    },
    { 
        id: "2",
        name: "Noelia",
        email: "noelia@mail.com",
        date: "2023-04-06",
        amount: 44,
        status: "paid"
    },
    { 
        id: "3",
        name: "Doug",
        email: "doug@mail.com",
        date: "2023-11-09",
        amount: 33,
        status: "pending"
    },
    { 
        id: "4",
        name: "Katia",
        email: "katia@mail.com",
        date: "2023-02-19",
        amount: 32,
        status: "paid"
    },
    { 
        id: "5",
        name: "Nolwen",
        email: "molwen@mail.com",
        date: "2023-01-02",
        amount: 44,
        status: "pending"
    },
    { 
        id: "6",
        name: "Devola",
        email: "devola@mail.com",
        date: "2022-01-20",
        amount: 28,
        status: "paid"
    },
    { 
        id: "7",
        name: "Nancy",
        email: "nancy@mail.com",
        date: "2023-11-09",
        amount: 38,
        status: "pending"
    },
    { 
        id: "8",
        name: "Naëlle",
        email: "naëlle@mail.com",
        date: "2023-09-21",
        amount: 29,
        status: "paid"
    },
    { 
        id: "9",
        name: "Figo",
        email: "figo@mail.com",
        date: "2023-11-09",
        amount: 21,
        status: "pending"
    },
    { 
        id: "10",
        name: "Gill",
        email: "gill@mail.com",
        date: "2023-11-09",
        amount: 44,
        status: "pending"
    }
];


export const allTitle: AllTitlesProps = {
    titleOne: "High performance for demanding customers",
    titleTwo: "We can help you make the right choice",
    titleThree: "We're present on every network",
    titlebox_1: "Core CPU i9",
    titlebox_2: "Core CPU i7"
}

export const allText: AllTextProps = {
    textOne: "Text 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum.",
    textTwo: "Text 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum.",
    textThree: "Text 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum.",
    textbox_1: "Text 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum.",
    textbox_2: "Text 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum."
}


const ITEMS_PER_PAGE = 6;
export function fetchInvoicesPages(query: string) {
    try {

      const count = customers;
      //console.log(count, "count");
  
      const totalPages = 10 / ITEMS_PER_PAGE; // 6 items/page
      const roundPage = Math.ceil(totalPages);
      return roundPage;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
}

// trbl with table render for pagination (without query)
export function fetchFilteredInvoices(query: string, currentPage: number) {
    //const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
      const invoices = customers;
      return invoices;

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }