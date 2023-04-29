import React from 'react';
import ReactDOM from 'react-dom/client';
import routes from './routes'
import './index.css';
import {  RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
