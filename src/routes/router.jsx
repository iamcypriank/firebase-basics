import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Header from "../components/Header";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
        path : '/',
        element : (
        <ProtectedRoutes> 
            <Header />
        </ProtectedRoutes>
        ),
        errorElement : <Error />,
        children : [{ 
            index : true,
            element : ( 
            <ProtectedRoutes> 
                <Home/>
            </ProtectedRoutes> )
        }]
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/signup',
        element : <Signup />
    }
])