import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Categories from './pages/Categories';
import Seeker from './pages/Seeker';
import Register from './pages/Register';

import './index.css';
import MainContent from './Components/MainContent.jsx';
import HelperInfo from './pages/HelperInfo.jsx';
import Housing from './pages/Housing.jsx';
import HomeShow from './pages/HomeShow.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContent />,
  },
  {
    path: 'categories',
    element: <Categories />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'seeker',
    element: <Seeker />,
  },
  {
    path: 'helperInfo',
    element: <HelperInfo />,
  },
  {
    path: 'helperDataInfo',
    element: <Housing />,
  },
  {
    path: 'homeShow',
    element: <HomeShow />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
