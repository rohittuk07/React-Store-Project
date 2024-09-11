import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './Pages'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children: [
        {
          index:true,
          element:<Landing/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'products',
          element:<Products/>
        },
        {
          path:'orders',
          element:<Orders/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
         path:'checkout',
         element:<Checkout/>
        },
        {
          path:'products/:id',
          element:<SingleProduct/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
