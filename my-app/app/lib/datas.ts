import { ProductsProps } from "./definitions";
import { ReviewsProps } from "./definitions";
import { CustomersProps } from "./definitions";

export const products: ProductsProps[] = [
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
        status: "member"
    },
    { 
        id: "2",
        name: "Noelia",
        email: "noelia@mail.com",
        date: "2023-04-06",
        amount: 44,
        status: "member"
    },
    { 
        id: "3",
        name: "Doug",
        email: "doug@mail.com",
        date: "2023-11-09",
        amount: 33,
        status: "member"
    },
];

const ITEMS_PER_PAGE = 6;
export function fetchInvoicesPages(query: string) {
    try {

      const count = customers;
      console.log(count, "count");
  
      const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE); // 6 items/page
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
}

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