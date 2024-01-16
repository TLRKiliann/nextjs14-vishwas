# Skate-Shop

## mysql remote LAN with server-actions


I've tried using mysql for queries to train the server actions and find out how NextJS14 works with the application and routing file system.


I've tried `usingShoppingCart` with a provider, but I'm not happy with the result (there's a mess when the user refreshes the page when the cart contains an item). I'd like to improve this, perhaps by customizing `useEffect` from `useLocalStorage`.


My goal was to improve my skills with Tailwind. I did some configuration (tailwind.config.js) and created reusable styles with globals.css.


Finally, it works well in local production. And I'm doing my best with typing. For me, the result is good, even if this project doesn't use ORM.

## run

`$ pnpm install`

`$ pnpm run build`

`$ pnpm run start`

## Structure

- (auth): login - register - forgot-password
- lib: db.ts, actions.ts, definitions.ts
- products: decks - trucks - wheels
- cart: result of cart.
- order: cart-order.tsx (shipping - payment)
- utils: urlGenerator.ts (reusable searchbar)
- hooks: useLocalStorage.ts
- about: our story
- contact: possibility to send a message
- ui (components): all reusable and ui
- public: media