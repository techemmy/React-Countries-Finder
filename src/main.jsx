import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CountryPage from './components/CountryPage.jsx'
import countryPageLoader from './loaders/countryPageLoader.js'
import countryCardListLoader from './loaders/CountryCardListLoader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Homepage />,
            loader: countryCardListLoader,
          },
          {
            path: '/country/:countryCode',
            element: <CountryPage />,
            loader: countryPageLoader,
          }
        ]
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
