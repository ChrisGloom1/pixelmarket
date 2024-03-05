# Technical task for an interview. 
## Acceptance criteria
- [x] The customer is presented with a grid of available product offerings, including title, image,
and price.
- [x] The customer can filter product selection based on category.
- [x] The customer should be able to search for a specific product based on title or description.
- [x] The customer can click a product to get a detailed page with title, image, price, and
description of the selected product.
- [x] The customer should be able to add the product to a session-based shopping cart.

## Technical requirements
- [x] The web shop should be a responsive web application.
- [x] The application must function as a single page application (SPA) and not reload the page
between views.
- [x] You can choose your own SPA framework (Used ReactJS).
- [x] The application should handle state of the shopping cart items.
- [ ] (Optional) The user should be able to sign up and login to save shopping cart for late visits.

## Improvements
- [ ] Implement Context to handle cart items.
- [ ] Move functions to add or remove products to cart into context.
- [ ] Add to cart button on product cards.
- [ ] Add a badge over "Cart" in navigation to show quantity in cart.
- [ ] Authenticate login with credentials from API.
- [ ] If user is logged in, change the stored cart items in local storage instead of session storage.
- [ ] If user is logged in, change "Login" in navigation to users username.
- [ ] Add pagination on products page for futureproofing gridview of products.
- [ ] Change filter by category to "cloud map" to select more than one category.
- [ ] Apply safe routes when navigating outside of navigation parameters. 

# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
