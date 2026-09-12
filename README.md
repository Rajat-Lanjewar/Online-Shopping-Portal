# Online Shopping Portal

A full front-end e-commerce web app built with **React 17**, featuring product browsing and search, a persistent shopping cart, Stripe-powered checkout, and a mock REST backend for user management.

## Features

- **Product catalog** — browse products by category (Shoes, Phones, Shirts, Watches, Ladies Wear) with a filterable grid view
- **Search** — live search across product name and category
- **Product detail page** — size and quantity selection before adding to cart
- **Shopping cart** — add/update/remove items, quantity and size persisted to `localStorage` so the cart survives a page refresh, with toast notifications on every cart action
- **Checkout** — order summary with live price calculation and card payment via `react-stripe-checkout`
- **Order confirmation** — dedicated confirmation screen after a successful payment
- **User accounts** — registration and a user management table (list/edit/delete) backed by a local JSON REST API
- **Contact form** — validated contact/feedback form
- **404 handling** — custom not-found page plus a top-level error boundary

## Tech stack

| Layer | Technology |
|---|---|
| UI framework | React 17, React Router v6 |
| State management | React Context API (`CartContext`, `ProductContext`) |
| Styling / components | Bootstrap 5, Reactstrap, Material-UI v4 |
| Payments | react-stripe-checkout |
| Notifications | react-toastify |
| Mock backend | json-server (serves `src/Components/Database/db.json`) |
| HTTP client | Axios |

## Project structure

```
public/
  products.json          # Product catalog (20 items across 5 categories)
  categories.json        # Category list used for filtering
  images/                # Product images
src/
  Components/
    API/api.js           # Axios calls to the json-server user API
    Database/db.json     # Mock user database for json-server
    Home.js, Products.js, ProductCard.js, Detail.js   # Browsing & product detail
    Search.js                                          # Search
    Cart.js, ProductSummary.js, OrderSummary.js        # Cart & checkout flow
    Login.js, User.js                                  # User registration & management
    Contact.js, Navbar.js, Error.js
  CartContext.js         # Cart state, localStorage sync, toast notifications
  ProductContext.js      # Loads and exposes the product catalog
  ErrorBoundary.js
  App.js                 # Route definitions
```

## Getting started

### Prerequisites
- Node.js and npm installed

### Installation
```bash
git clone https://github.com/Rajat-Lanjewar/Online-Shopping-Portal.git
cd Online-Shopping-Portal
npm install
```

### Running the app
The app uses `json-server` as a lightweight mock backend for user accounts, so the frontend and the mock API need to run together:

```bash
npm run dev
```
This runs the React dev server and `json-server` concurrently (via `concurrently`). The app will be available at `http://localhost:3000`, and the mock user API at `http://localhost:3003/users`.

If you only need the frontend (e.g. pages that don't touch user accounts):
```bash
npm start
```

### Available scripts
| Command | Description |
|---|---|
| `npm run dev` | Runs the frontend and the mock API together |
| `npm start` | Runs the React frontend only |
| `npm run json-server` | Runs only the mock API on port 3003 |
| `npm run build` | Production build |
| `npm test` | Runs tests |

## Known issues

- `src/App.js` is currently empty in this snapshot — the route definitions (`/`, `/products`, `/product/:id`, `/search`, `/cart`, `/login`, `/customers`, `/contact`, `/confirmation`) referenced throughout `Navbar.js` and the page components need to be wired up there for the app to run end-to-end. Happy to help fill this in if useful.
- `public/categories.json` lists 4 categories, but the product catalog itself includes a 5th (`LadiesWear`) — worth reconciling so category filters stay in sync with the data.

