import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './scrollbar.css';
import { Provider } from 'react-redux';
import store from '../src/utils/store';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body.Jsx';
import Main_Container from './Components/Main_Container';
import Watch_page from './Components/Watch_page';
import Sidebar from './Components/Sidebar';

const Layout = () => (
  <>
    <Header />
    <Body />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main_Container />
      },
      {
        path: '/',
        element: <Main_Container />
      },
      {
        path: 'watch',
        element: <Watch_page />
      },
        
    ]
  }
]);


const App_Layout = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App_Layout;
