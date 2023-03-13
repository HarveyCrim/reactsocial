import { BrowserRouter, Routes, Route,  Navigate} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useContext } from "react";
import { authContext } from "./components/context/AuthContext";
export default function App(){
    const {user} = useContext(authContext);
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {user ? <Home /> : <Navigate to = "/login" />} />
            <Route path = "/login" element = {user ? <Navigate to = "/" /> : <Login /> } />
            <Route path = "/register" element = {user ? <Navigate to = "/" /> :<Register />} />
            <Route path = "/profile/:username" element = {<Profile />} />
        </Routes>
        </BrowserRouter>
        

    )
}