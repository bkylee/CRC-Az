import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import ResumePage from './ResumePage.jsx'
import Blog from './Blog.jsx'

const router = Router([
  {
    path: "/resume",
    element: <ResumePage />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path:"/blog/firstPost"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
