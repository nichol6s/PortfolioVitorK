import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from '../routes/Home/index.jsx'
import Error from '../routes/Error/index.jsx'
import EditarProdutos from '../routes/EditarProdutos/index.jsx'
import Produtos from '../routes/Produtos/index.jsx'

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)