# Skate-Shop

## mysql remote LAN with server-actions


Initially, I wanted to take the vishwas course on Nextjs14, but the courses weren't moving fast enough and the server actions weren't covered. So I chose to make a skateboard store website. I made this choice because I knew there would be a lot of images available and to make a skateboard site that suited me.


I've tried using mysql for queries to train the server actions and find out how NextJS14 works with the application and routing file system.


I've tried `usingShoppingCart` with a provider, but I'm not happy with the result (there's a mess when the user refreshes the page, cart resets item to zero). There is no route for cartitem (I've tried to use usePathname to verify that), so it's not possible to use action in cartItem component directly. That's why I've created a cart page.


My goal was to improve my skills with Tailwind. I did some configuration (tailwind.config.js) and created reusable styles with globals.css.


Finally, it works well in local production. And I'm doing my best with typing. For me, the result is good, even if this project doesn't use ORM.

## Run in development

`$ pnpm install`

`$ pnpm run dev`

## Build for production

`$ pnpm run build`

`$ pnpm run start`

## Structure

- home page (carousel + parallax + horizontal-scrollbar-indicator)
- (auth): login - register - forgot-password (when user wants to reach page order)
- lib: db.ts, actions.ts, definitions.ts
- products: decks - trucks - wheels
- cart: result of cart.
- order: cart-order.tsx (shipping - payment)
- utils: urlGenerator.ts (reusable searchbar for several routes)
- hooks: useLocalStorage.ts
- about: our story
- contact: possibility to send a message
- ui (components): all reusable and ui
- public: media