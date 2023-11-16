# nextjs14-vishwas

Codeevolution:
--------------

!!! params.slug & params.productId ou params.reviewId !!!
([[...slug]] - products => [productId] => reviews => [reviewId])

NextJS => file-system based routing mechanism

1) Intro

- Routing 
- Data fetching
- Optimized rendering
- Simplify building for production
- API routes with data fetching (not client)
- Rendering
- ES6 but not with functions Components

---

2) Install

- node.js is required
- pnpm dlx (or pnpx) create-next-app@latest
- Options: TS - EsLint - Tailwind - Router

---

3) Config

- .next folder is generated by cmd dev or build script
- package.json contains all that you need for typescript react etc.
- node_modules this is where all dependencies are installed
- public folder contains static assets with all img and icon.

Control flow:
- pnpm dev execute layout.tsx (RootLayout) and the children after who's comming from page.tsx

---

4) Components with nextjs

- Server component (no user interactions, fetching data from db with API layout)
- Client component

All components are server component by default.

- "use client";
- "use server";

---

5) Routing

- page.tsx define the route for url.
- first layout.tsx of app folder is automaticaly created when the app is launched.

---

6) Nested routes

- () = not appear in address url
- ex with blog folder => blog/first/page.tsx & blog/second/page.tsx
- when calling path with first (blog/first) page.tsx is called.
- same thing with second folder for the second page.tsx

---

7) Dynamic Routes

- Dynamic routes (with [] and productId)
- Dynamic value
- products/[productId] folder with page.tsx

(details page.tsx)
export default function ProductDetails({ params }: {params: {productId: string}}) {
	return <h1>Details about product {params.productId}</h1>
}

(main page.tsx)
export default function ProductList() {
	return <h1>List of all products</h1>
}

---

8) Nested Dynamic Routes

reviews => create reviews folder & into it: [reviewId] folder with a page.tsx 

export default function Page({params}: {params: {productId: string, reviewId: string}}) {
	return <p>Some page display {params.productId} {params.reviewId}</p>
}

---

9) catch all segments (with nested routes)

```
docs
    > [...slug]
	> page.tsx
```

```
export default function Docs({params}: {params: {slug:[]}}) {
	if (params.slug.length === 2) {
		return <h1>{params.slug[0]} & {params.slug[1]}</h1>
	}
	else if (params.slug.length === 1) {
		return <h1>{params.slug[0]}</h1>
	}
	return (
		<h1>Docs Page</h1>
	)
}
```

test it with : ".../docs/feature1/concept1"

---

10) not found

```
(page.tsx)

import { notFound } from 'next/navigation'

if (parseInt(params.rewieId) > 100) {
	notFound()
}
```

```
(not-found.tsx)

export default function NotFound() {
	return (
        <>
            <h1>Not found</h1>
        </>
    )
}

```

11) collocation

Si le fichier n'est pas nommé par page.tsx le routeur ne le prend pas en compte.

---

12) Private folder

Folder is private witn an underscore: example _lib

---

13) url path structure with auth

Route groups

(auth) with login, register, forgot-password

---

14) layout

A page is UI that is unique to a route.
A layout is UI that is shared between multiple pages in the app.

example with : Header & Footer

---

15) Nested layout

```
export default function ProductDetailsLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}
```