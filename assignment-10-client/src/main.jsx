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
import AllTourist from './components/AllTourist';
import TouristDetails from "./components/TouristDetails";
import CountryCard from "./components/CountryCard";
import UpdateSpots from "./components/UpdateSpots";
import CategoriesCard from "./components/CategoriesCard";
import TouristSpots from "./components/TouristSpots";
import MyListPage from "./components/MyListPage";






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
                    loader: () => fetch('http://localhost:5000/category')
                    
                   
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
                    path: "/allTourist",
                    element: <AllTourist></AllTourist>,
                    loader : () => fetch('http://localhost:5000/place')
                },
                {
                    path: "/addTourist",
                    element: <PrivateRoute>
                        <AddTourist></AddTourist>
                    </PrivateRoute>,
                },
                {
                    path: "/myList",
                    element: <PrivateRoute>
                       <MyListPage></MyListPage>
                    </PrivateRoute>,
                    loader : () => fetch('http://localhost:5000/place')
                    
                },
                {
                    path: "/updateSpots/:id",
                    element: <PrivateRoute>
                        <UpdateSpots></UpdateSpots>
                    </PrivateRoute>,
                    loader : ({params}) => fetch(`http://localhost:5000/place/${params.id}`)

                },
                {
                    path: "/countries",
                    element: <PrivateRoute>
                        <CountryCard></CountryCard>
                    </PrivateRoute>,
                },

                {
                    path: "/place/:id",
                    element: <PrivateRoute>
                      <TouristDetails></TouristDetails>
                    </PrivateRoute>,
                    loader: () => fetch('http://localhost:5000/place')
                  },

                {
                    path: "/category/:id",
                    element : <CategoriesCard></CategoriesCard>
                },
                {
                    path: "/touristSpot",
                    element : <TouristSpots></TouristSpots>,
                    loader: () => fetch('http://localhost:5000/place')
                }
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
