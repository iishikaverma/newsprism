import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Subscribe from "./Subscribe";
import Search from "./Search";
import Topics from "./Topics";
import Trends from "./Trends";
import Dashboard from "./Dashboard";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/subscribe",
            element: <Subscribe/>
        },
        {
            path: "/search",
            element: <Search/>
        },
        {
            path: "/topics",
            element: <Topics/>
        },
        {
            path: "/trends",
            element: <Trends/>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;