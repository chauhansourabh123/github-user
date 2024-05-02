import React from "react";
import Logo from "./Component/Logo";
import User from "./Routes/User";
import UserInfo from "./Routes/UserInfo";
import {  RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <User />,
  },
  {
    path: '/:username',
    element: <UserInfo />
  }
])

function App() {
  return (

    <div className="min-h-screen bg-black">
      <div className="container bg-gray-400"></div>

      <Logo />
  
        <RouterProvider router={router} />
    
    </div>

  )
}

export default App