import type { ReviewsProps, CustomersProps } from "./definitions";
import type { AllTitlesProps, AllTextProps } from "./definitions";  

// reviews & reviews id (need more video to display something)
export const reviews: ReviewsProps[] = [
    {
        id: 1,
        categories: "Last video",
        review: "little text to display something about (baker 1)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 2,
        categories: "Last video",
        review: "little text to display something about (baker 2)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 3,
        categories: "Last video",
        review: "little text to display something about (baker 3)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 4,
        categories: "Last video",
        review: "little text to display something about (baker 4)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 5,
        categories: "Last video",
        review: "little text to display something about (baker 5)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 6,
        categories: "Last video",
        review: "little text to display something about (baker 6)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 7,
        categories: "Last video",
        review: "little text to display something (baker 7)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 8,
        categories: "Last video",
        review: "little text to display something (baker 8)",
        video: "/video/skate-trick2.mp4"
    },
    {
        id: 9,
        categories: "Last video",
        review: "little text to display something (baker 9)",
        video: "/video/skate-trick2.mp4"
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
    titleThree: "We have all what you need",
    titleFour: "We're present on every network",
    titlebox_1: "Win a free training session",
    titlebox_2: "Offer on skate-park passes"
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
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    textThree: "Text 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
        culpa qui officia deserunt mollit anim id est laborum.",
    textFour: "Text 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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