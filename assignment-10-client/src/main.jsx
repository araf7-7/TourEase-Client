import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Reg from "./components/Reg";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:
            [
                {
                    path: "/",
                    element:<Home></Home> ,
                }, 
                {
                    path: "/login",
                    element:<Login></Login> ,
                }, 
                {
                    path: "/register",
                    element: <Reg></Reg> ,
                }, 
                   
            ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />

    </React.StrictMode>
); 
