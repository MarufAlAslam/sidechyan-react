import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import ErrorPage from "../pages/error";
import Explore from "../pages/explore";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/explore',
        element: <Explore />
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
])