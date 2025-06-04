import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './Components/[ages/Home'
import { About } from './Components/[ages/About'
import { Countries } from './Components/[ages/Countries'
import { AppLayout } from './Components/layout/AppLayout'
import { Contact } from './Components/[ages/Contact'
import { CountryDetails } from './Components/[ages/CountryDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/countries',
          element: <Countries />
        },
        {
          path: '/countries/:countryCode',
          element: <CountryDetails />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
