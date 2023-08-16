import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import NOTIFICATION from "../pages/notification/Notification";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }, 
    {
        path: "/notification",
        element: <NOTIFICATION />
    }
])