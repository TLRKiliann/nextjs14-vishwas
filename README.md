# nextjs14-vishwas

Codeevolution:
--------------

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

basic installation with Options:
- node.js is required
- pnpm dlx (or pnpx) create-next-app@latest

Options:
- TypeScript 
- EsLint 
- Tailwind 
- Router
- (prefixer & postcss are automatically installed)

dropdown:
- pnpm add @nextui-org/react

---

3) Config

- .next folder is generated by cmd dev or build script
- package.json contains all that you need for typescript react etc.
- node_modules this is where all dependencies are installed
- public folder contains static assets with all img and icon.

Control flow:
- pnpm run dev => execute layout.tsx (RootLayout) and the children after who's comming from page.tsx

---

4) Components with nextjs

- Server component (no user interactions, fetching data from db with API layout)
- Client component

All components are server component by default.

- "use client"; (for client : module from 'next/navigation')
for example: useRouter, useParams, useSearchParams...

- "use server"; (for server actions : async + await)
for example: by fetching data, non-interactive UI.

https://stackoverflow.com/questions/76369521/how-does-the-use-client-directive-work-in-next-js-13

---

5) Routing

- page.tsx define automatically the route for url.
- first layout.tsx of app folder is automatically created when the app is launched.
- you cannot use 2 params in same url excepted with slug.
- Link permit to reach page by.

replace attribute erase history of routing (you will be redirected to the home page by click back button of browser).

```
import Link from 'next/link'
...
<Link href="/products" replace>Products</Link>
```

```
<Link href={`/products/${productId}`} replace>Products</Link>
```

main page or home = "/"

you can also use useRouter(), such as :

```
"use client";

import {useRouter} from 'next/navigation'
...
const router = useRouter()
...
router.push("/product")
```

---

6) Nested routes

- () = not appear in url
- ex with blog folder => blog/first/page.tsx & blog/second/page.tsx
- when calling path with first (blog/first) page.tsx is called.
- same thing with second folder for the second page.tsx

---

7) Dynamic Routes

- Dynamic routes (with [] and productId)
- Dynamic value
- products/[productId] folder with page.tsx

```
(products page.tsx)
export default function ProductList() {
	const products = [
		{
			id: 1,
			name: "apple"
		},
		...
	]
	return (
		<>
			<h1>List of products</h1>
			{products.map((product) => (
				<Link href={`/products/${product.id}`}></Link>
			))}
		</>
	)
}
```

```
(productId page.tsx)
export default function ProductDetails({ params }: {params: {productId: string}}) {
	return <h1>Details about product {params.productId}</h1>
}
```

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

we can also use [[...slug]] to access to "docs folder", otherwise, nextjs return a 404 not found.

test it with : ".../docs"

---

10) Page not found

In same folder you can create a "not-found.tsx" aside "page.tsx"
For example: 

```
reviews:
	> not-found.tsx
	> page.tsx
```

```
(page.tsx)

import { notFound } from 'next/navigation'

export default function Page({params}: {params: {reviewId: string}}) {
	if (parseInt(params.rewieId) > 100) {
		notFound()
	}
	return (
		<div>
			<p>{params.reviewId}</p>
		</div>
	)
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

---

11) Collocation

If the file is not named page.tsx, the router ignores it.

The function name in "page.tsx" can be named differently.

Basic structure of a folder:

```
reviews:
	> error.tsx
	> layout.tsx
	> not-found.tsx
	> page.tsx
```

---

12) Private folder

For example: _private

Folder is private with an underscore. You cannot access by URL. It requires a redirect.

look at redirect: 

https://nextjs.org/docs/app/api-reference/functions/redirect

permanentRedirect:

https://nextjs.org/docs/app/api-reference/functions/permanentRedirect

---

13) url path structure with auth

Route groups

```
(auth):
	> login
	> forgot-password
	> register
```

- () = auth will not appears in url
- url = localhost:3000/login

---

14) layout

A page is UI that is unique to a route.
A layout is UI that is shared between multiple pages in the app.

example with : Header & Footer

---

15) Nested layout

RootLayout is used into the main layout of app. For others layout, we can replace name of function by name function of page.tsx. For example:

```
/products/[productId]/layout.tsx

import React from 'react'

export default function ProductDetailsLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
	        <h2>Display from the top of layout (DetailsProduct)!</h2>
            {children}
        </div>
    )
}
```

---

16) Authlayout

We can use a layout into auth such as follow:

```
(auth):
	> forgot-password
	> (with-auth-layout)
		> login
		> register
		> layout.tsx
```

```
(layout.tsx)
export default function authLayout() {
	return (
		...
	)
}
```

---

17) Metadata from head & Dynamic metadata to improve SEO

- metadata can be used with page.tsx and layout.tsx.
- metadata improve ranking **SEO**.
- we can use it for every page of an app.
- metada can be dynamic for dynamic segment, such as [productId].

Example of standard metadata into `layout.tsx` of root.

Example of dynamic segment into `page.tsx` of dynamic segment [productId].

---

18) Metadata with title

- layout.tsx of the root

```
export const metadata: Metadata = {
	title: {
		default: "NextJS14 Tutorial",
		template: "%s | Codeevolution",
	},
	description: "nextjs14 tutorial"
}
```

- page.tsx (children)

```
export const metadata: Metadata = {
  	title: "dashboard",
  	description: "access restricted"
}
```

or with absolute:

```
export const metadata: Metadata = {
    title: {
        absolute: "Docs"
    },
    description: "entire docs"
}
```