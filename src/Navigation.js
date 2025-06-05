import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import ApplicationForm from './pages/ApplicationForm/ApplicationForm'
import JobDetails from './pages/JobDetails/JobDetails'
import FinishedAplication from './pages/FinishedAplication/FinishedAplication'


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
          {
            path: '/ApplicationForm',
            element: < ApplicationForm/>
        },
        {
            path: '/JobDetails',
            element: <JobDetails />
        },
        {
            path: '/FinishedAplication',
            element: <FinishedAplication />
        },

    ])
    return <RouterProvider router={router} />
}