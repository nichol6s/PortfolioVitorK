
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro404 from './routes/Erro404.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>,
    errorElement: <Erro404/>,
    children:[
      {path: '/', element: <Home/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
       <RouterProvider router={router}/>
  ,
)

