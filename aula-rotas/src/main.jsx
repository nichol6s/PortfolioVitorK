import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRoutes, RouterProvider } from 'react-router-dom'
import Home from '../routes/Home/index.jsx'
import Produtos from '../routes/Produtos/index.jsx'
import Error from '../routes/Error/index.jsx'
import EditarProdutos from '../routes/EditarProdutos/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
