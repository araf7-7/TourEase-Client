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
import AddTourist from './components/AddTourist';
import FirebaseProvider from "./components/FirebaseProvider/FirebaseProvider";
import { Toaster } from "sonner";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./components/PrivetRoute/PrivetRoute";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/login",
                    element: <Login></Login>,
                },
                {
                    path: "/register",
                    element: <Reg></Reg>,
                },
                {
                    path: "/addTourist",
                    element: <PrivateRoute>
                        <AddTourist></AddTourist>
                    </PrivateRoute>,
                },



            ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirebaseProvider>

            <Toaster position='top-center'></Toaster>
            <RouterProvider router={router} />
        </FirebaseProvider>
    </React.StrictMode>
); 
