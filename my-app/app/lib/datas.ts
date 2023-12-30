import type { ReviewsProps, CustomersProps, ImgSetProps } from "./definitions";
import type { AllTitlesProps, AllTextProps } from "./definitions";  
import bakerOver from '@/public/img_decks/baker/baker-over.jpg';
import bakerUnder from '@/public/img_decks/baker/baker-under.jpg';
import bakerProfile from '@/public/img_decks/baker/baker-profile.jpg';
import bakerOver_2 from '@/public/img_decks/baker/baker2-over.jpg';
import bakerUnder_2 from '@/public/img_decks/baker/baker2-under.jpg';
import bakerProfile_2 from '@/public/img_decks/baker/baker2-profile.jpg';
import bakerOver_3 from '@/public/img_decks/baker/baker3-over.jpg';
import bakerUnder_3 from '@/public/img_decks/baker/baker3-under.jpg';
import bakerProfile_3 from '@/public/img_decks/baker/baker3-profile.jpg';
import bakerOver_4 from '@/public/img_decks/baker/baker4-over.jpg';
import bakerUnder_4 from '@/public/img_decks/baker/baker4-under.jpg';
import bakerProfile_4 from '@/public/img_decks/baker/baker4-profile.jpg';
import bakerOver_5 from '@/public/img_decks/baker/baker5-over.jpg';
import bakerUnder_5 from '@/public/img_decks/baker/baker5-under.jpg';
import bakerProfile_5 from '@/public/img_decks/baker/baker5-profile.jpg';
import bakerOver_6 from '@/public/img_decks/baker/baker6-over.jpg';
import bakerUnder_6 from '@/public/img_decks/baker/baker6-under.jpg';
import bakerProfile_6 from '@/public/img_decks/baker/baker6-profile.jpg';
import bakerOver_7 from '@/public/img_decks/baker/baker7-over.jpg';
import bakerUnder_7 from '@/public/img_decks/baker/baker7-under.jpg';
import bakerProfile_7 from '@/public/img_decks/baker/baker7-profile.jpg';
import bakerOver_8 from '@/public/img_decks/baker/baker8-over.jpg';
import bakerUnder_8 from '@/public/img_decks/baker/baker8-under.jpg';
import bakerProfile_8 from '@/public/img_decks/baker/baker8-profile.jpg';

export const imgSet: ImgSetProps[] = [
    {
        id: 1,
        images: [bakerOver, bakerUnder, bakerProfile]
    },
    {
        id: 2,
        images: [bakerOver_2, bakerUnder_2, bakerProfile_2]
    },
    {
        id: 3,
        images: [bakerOver_3, bakerUnder_3, bakerProfile_3]
    },
    {
        id: 4,
        images: [bakerOver_4, bakerUnder_4, bakerProfile_4]
    },
    {
        id: 5,
        images: [bakerOver_5, bakerUnder_5, bakerProfile_5]
    },
    {
        id: 6,
        images: [bakerOver_6, bakerUnder_6, bakerProfile_6]
    },
    {
        id: 7,
        images: [bakerOver_7, bakerUnder_7, bakerProfile_7]
    },
    {
        id: 8,
        images: [bakerOver_8, bakerUnder_8, bakerProfile_8]
    },
    {
        id: 9,
        images: [bakerOver_8, bakerUnder_8, bakerProfile_8]
    }
];

export const reviews: ReviewsProps[] = [
    {
        id: 1,
        categories: "Last article about baker one",
        review: "little text to display something about (baker 1)"
    },
    {
        id: 2,
        categories: "Last article about baker two",
        review: "little text to display something about (baker 2)"
    },
    {
        id: 3,
        categories: "Last article about baker three",
        review: "little text to display something about (baker 3)"
    },
    {
        id: 4,
        categories: "Last article about baker four",
        review: "little text to display something about (baker 4)"
    },
    {
        id: 5,
        categories: "Last article about baker five",
        review: "little text to display something about (baker 5)"
    },
    {
        id: 6,
        categories: "Last article about baker six",
        review: "little text to display something about (baker 6)"
    },
    {
        id: 7,
        categories: "Last article about baker seven",
        review: "little text to display something (baker 7)"
    },
    {
        id: 8,
        categories: "Last article about baker eight",
        review: "little text to display something (baker 8)"
    },
    {
        id: 9,
        categories: "Last article about baker nine",
        review: "little text to display something (baker 9)"
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