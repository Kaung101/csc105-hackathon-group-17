import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Categories from './pages/Categories';
import Seeker from './pages/Seeker';
import Register from './pages/Register';
import LoginHelper from './pages/LoginHelper.jsx';
import './index.css';
import MainContent from './Components/MainContent.jsx';
import HelperInfo from './pages/HelperInfo.jsx';
import Housing from './pages/Housing.jsx';
import HomeShow from './pages/HomeShow.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginHelper from './pages/LoginHelper.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    path: 'login',
    element: <LoginHelper />,
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
