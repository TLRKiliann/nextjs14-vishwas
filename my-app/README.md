# Don't forget !

- darkmode with tailwind config
- contact + about
- 

## border

- border-y border-blue-400/20

## shadow

- tailwind config

## filter

- filter grayscale blur-sm contrast-200

# animations

- skew-y-6

- transition

- delay-300

- duration-300

- ease-in-out

- translate-x(or:-y)-1/4 = 25%
- translate-x(or:-y)-96 = 24rem

- scale

<!-- Colored shadow-->
<button class="shadow-lg shadow-indigo-500/40 ...">Subscribe</button>

ex: scale-105 (transform + transition)

example :

      keyframes: {
        slideanime: {
          '0%': { transform: 'translateY(200px)'},
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        "slide-anime": "slideanime 0.4s ease-in-out 3",
      },

and call

className="animate-slide-anime"

- ex: transition transform rotate-x-0 animate-vertical-rotation

- Erase a form with onSubmit :
``````
    const handleDeleteAllItem = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        removeAllFromCart();
        const target = e.target as HTMLFormElement;
        target.reset();
        console.log("payment done");
    };
```

## Database

- Create a db:

MariaDB [mytable]> SELECT * FROM `products`;
+----+---------+----------------------+--------+-------+
| id | name    | img                  | price  | stock |
+----+---------+----------------------+--------+-------+
|  1 | CORE i9 | /img_cpu/cpu-i9.png  | 369.40 |    52 |
|  2 | CORE i7 | /img_cpu/cpu-i7.png  | 339.70 |    38 |
|  3 | CORE i5 | /img_cpu/cpu-i5.png  | 250.30 |    17 |
|  4 | CORE i3 | /img_cpu/cpu-i3.png  | 190.20 |    23 |
|  5 | Pentium | /img_cpu/pentium.jpg | 177.80 |    24 |
|  6 | Athalon | /img_cpu/athalon.jpg | 133.40 |    12 |
+----+---------+----------------------+--------+-------+
6 rows in set (0.001 sec)

---

MariaDB [mytable]> SELECT * FROM `bakerdecks`;
+----+-------------+----------------------------------+--------+-------+
| id | deckname    | img                              | price  | stock |
+----+-------------+----------------------------------+--------+-------+
|  1 | baker one   | /img_decks/baker/deck_baker1.jpg | 108.50 |    12 |
|  2 | baker two   | /img_decks/baker/deck_baker2.jpg | 105.20 |    18 |
|  3 | baker three | /img_decks/baker/deck_baker3.jpg | 115.40 |     7 |
|  4 | baker four  | /img_decks/baker/deck_baker4.jpg | 113.80 |    22 |
|  5 | baker five  | /img_decks/baker/deck_baker5.jpg | 112.80 |     3 |
|  6 | baker six   | /img_decks/baker/deck_baker6.jpg | 114.30 |    15 |
|  7 | baker seven | /img_decks/baker/deck_baker7.jpg | 114.60 |    11 |
|  8 | baker eight | /img_decks/baker/deck_baker8.jpg | 111.20 |     5 |
|  9 | baker nine  | /img_decks/baker/deck_baker9.jpg | 119.50 |    25 |
+----+-------------+----------------------------------+--------+-------+
9 rows in set (0.001 sec)

---

MariaDB [mytable]> SHOW COLUMNS FROM `cartorder`;
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| id         | int(11)      | NO   | PRI | NULL    |       |
| deckname   | varchar(255) | NO   |     | NULL    |       |
| totalprice | float(10,2)  | NO   |     | NULL    |       |
| count      | tinyint(4)   | NO   |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
4 rows in set (0.005 sec)


- Install mysql

$ pnpm add mysql2

- Create file ...

---

## encrypt - decrypt

mariadb => bcrypt doesn't work & crypto doesn't work to compare data...

```
          // to compare (not ok)
          const salt = crypto.randomBytes(16).toString("hex");
          const hash = crypto
            .pbkdf2Sync(findPassword.password, salt, 1000, 64, "sha512")
            .toString("hex");

          const inputHash = crypto
            .pbkdf2Sync(findPassword.password, salt, 1000, 64, "sha512")
            .toString("hex");
          const passwordsMatch = hash;
          if (passwordsMatch === inputHash) {
            console.log("password ok")
            return data.json();
          }
```

```
// to hash (ok)
if (password !== null || password !== undefined) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");       
```


## Don't need to duplicate functions with datas.ts:

## NextAuth

import { NextAuthProvider } from '@/session-provider';
<NextAuthProvider></NextAuthProvider>

// credentials by default
"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

---


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
