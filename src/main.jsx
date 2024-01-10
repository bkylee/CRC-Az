import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Resume from './ResumePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />
  // },
  {
    path: "/",
    element: <Resume />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
