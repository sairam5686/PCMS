import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router';
import Dashboard from './Pages/Consultant/Dashboard.jsx';
import Attendance from './Pages/Consultant/Attendance.jsx';
import View_application from './Pages/Consultant/Oppertunities/View_application.jsx';
import My_applications from './Pages/Consultant/Oppertunities/My_applications.jsx';


const routes = createBrowserRouter([
  {
    path:'/consultant_login',
    element:<App/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  } ,
  {
    path:'/attendance',
    element:<Attendance/>
  },{
    path:'/opp_list',
    element:<View_application />
  },
  {
    path:'/my_list'
    ,element:<My_applications />
  }

])


createRoot(document.getElementById('root')).render(
  
    <RouterProvider  router = {routes}/>
  
)
