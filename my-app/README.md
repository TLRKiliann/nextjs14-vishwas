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
