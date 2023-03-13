import "./Login.css";
import {loginCall} from "../../apicalls";
import { useContext, useRef } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { authContext } from "../../components/context/AuthContext";
import { Navigate,Link } from "react-router-dom";
import { ppContext, PpContextProvider } from "../../components/context/ppContext";
export default function Login(){
    const {user,isFetching, dispatch} = useContext(authContext);
    const email = useRef();
    const password = useRef();
    const {userData,setUserData} = useContext(ppContext);
     async function clickedLogin(e){
        e.preventDefault();
         dispatch({type : "LOGIN_START"});
    try{
        const response = await axios.post("http://localhost:4000/api/auth/login", {email:email.current.value, password:password.current.value});
        dispatch({type : "LOGIN_SUCCESS", payload : response.data})
    }
    catch(err){
        dispatch({type : "LOGIN_FAILURE", payload : err})
    }
      if(user){
        console.log(user);
      }
    }

    return (

        <div className = "ReactSocial">
            <div className = "loginComps">
                <div className = "tagLine">
                   <h1>ReactSocial</h1>
                   <p>Connect with friends and family around
                   the word with ReactSocial</p>
                </div>
                <div className = "formLogin">
                    <form className = "loginForm" onSubmit={clickedLogin}>
                    <input ref = {email} type = "text" placeholder = "Email" />
                    <input ref ={password} type = "password" placeholder = "Password" />
                        <Link to = "/register"><button className = "signUp">Sign Up</button></Link>
                        <button className = "LoginButton" type = "submit">{ isFetching ?<CircularProgress color="inherit" size="25px"/> : "Login"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}