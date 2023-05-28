import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Categories from './pages/Categories';
import Seeker from './pages/Seeker';
import './index.css';
import RegisterHelper from './pages/RegisterHelper.jsx';
import MainContent from './Components/MainContent.jsx';
import HelperInfo from './pages/HelperInfo.jsx';
import Housing from './pages/Housing.jsx';
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
    path: 'seeker',
    element: <Seeker />,
  },
  {
    path: 'register',
    element: <RegisterHelper />,
  },
  {
    path: 'helperInfo',
    element: <HelperInfo />,
  },
  {
    path: 'helperDataInfo',
    element: <Housing />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
