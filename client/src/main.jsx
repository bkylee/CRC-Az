import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import ResumePage from './ResumePage.jsx'
import Blog from './Blog.jsx'
import { FirstPost } from './blogPosts/FirstPost.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
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
    path: "/blog/first-post",
    element: <FirstPost />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
