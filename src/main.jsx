import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router'
import {  HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
          <div className='max-w-7xl mx-auto'>

           <RouterProvider router={router} />
           </div>
    </HelmetProvider>
  </StrictMode>,
)
