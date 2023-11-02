import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home/App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './pages/auth/login';
import Daftar from './pages/auth/daftar';
import DetailProduct from './pages/products/detailProduct';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Cart from './pages/cart/detailCart';
import User from './pages/profile/user';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/daftar',
    element: <Daftar />
  },
  {
    path: '/product-details/:id',
    element: <DetailProduct />
  },{
    path: '/cartshopping',
    element: <Cart />
  },{
    path: '/search-product'
  },{
    path: '/profile',
    element: <User />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
