import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';

import { Provider } from 'react-redux';
import { store } from './store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CartProvider } from './Poviders/CartContext';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/singleProduct/:id",
    element: <SingleProduct />
  },
  {
    path:"/Cart",
    element: <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
