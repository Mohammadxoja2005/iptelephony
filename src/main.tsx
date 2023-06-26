import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// routes
import { RouterProvider } from "react-router-dom"
import { routes } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
