import { ProductsProps } from "./definitions";
import { ReviewsProps } from "./definitions";
import { CustomersProps } from "./definitions";

export const products: ProductsProps[] = [
    {
        id: 1,
        name: "Core i9",
        img: "/img_cpu/i9_cpu.jpg",
        price: 1230,
        stock: 23
    },
    {
        id: 2,
        name: "Core i7",
        img: "/img_cpu/cpu_i7.jpg",
        price: 1130,
        stock: 23
    },
    {
        id: 3,
        name: "Core i5",
        img: "/img_cpu/cpu_i5.jpg",
        price: 1030,
        stock: 23
    },
    {
        id: 4,
        name: "Core i9",
        img: "/img_cpu/i9_cpu.jpg",
        price: 1230,
        stock: 23
    },
    {
        id: 5,
        name: "Core i7",
        img: "/img_cpu/cpu_i7.jpg",
        price: 1130,
        stock: 23
    },
    {
        id: 6,
        name: "Core i5",
        img: "/img_cpu/cpu_i5.jpg",
        price: 1030,
        stock: 23
    }
];

export const reviews: ReviewsProps[] = [
    {
        id: 1,
        ref: "extra 1"
    },
    {
        id: 2,
        ref: "extra 2"
    },
    {
        id: 3,
        ref: "extra 3"
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