import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import Form from './pages/Form/Form'
import JobDetails from './pages/JobDetails/JobDetails'


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
          {
            path: '/Form',
            element: < Form/>
        },
        {
            path: '/JobDetails',
            element: <JobDetails />
        },

    ])
    return <RouterProvider router={router} />
}