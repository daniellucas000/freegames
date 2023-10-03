import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home/index.tsx';
import { BrowserGames } from './routes/BrowserGames/index.tsx';
import { BrowserGameDetail } from './routes/BrowserGameDetails/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <BrowserGameDetail />,
      },
      {
        path: '/browser',
        element: <BrowserGames />,
      },
      {
        path: '/browser/:id',
        element: <BrowserGameDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
