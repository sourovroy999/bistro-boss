import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router'
// import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

       {/* <HelmetProvider> */}
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <div className='max-w-7xl mx-auto'>
              <RouterProvider router={router} />
          </div>
          <Toaster />
          
        </QueryClientProvider>
      </AuthProvider>


   
       {/* </HelmetProvider> */}
   
  </StrictMode>,
)
