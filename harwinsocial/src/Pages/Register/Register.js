import { useContext, useRef } from "react";
import { authContext } from "../../components/context/AuthContext";
import axios from "axios";
import {loginCall} from "../../apicalls";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import "./Register.css";
export default function Register(){
    const {user, isFetching,dispatch} = useContext(authContext);
    const email = useRef()
    const password = useRef()
    const cpass = useRef()
    const username = useRef()
    async function registered(e){
        e.preventDefault();
        if(cpass.current.value !== password.current.value){
            password.current.setCustomValidity("passwords do not match");
        }
        else{
            try{
                const response = await axios.post("http://localhost:4000/api/auth/register",{username : username.current.value, email :email.current.value,
                password : password.current.value});
                await loginCall({email : email.current.value, password : password.current.value}, dispatch);
                if(user){
                    return <Navigate to = {"/"} />
                }

            }
            catch(err){

            }

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
                <div className = "formLogin" onSubmit = {registered}>
                    <form className = "loginForm">
                    <input ref = {username} type = "text" placeholder = "Username" />
                    <input ref = {email} type = "text" placeholder = "Email" />
                    <input ref = {password} type = "password" placeholder = "Password" />
                    <input ref = {cpass} type = "password" placeholder = "Confirm Password" />
                
                        <button type = "submit" className = "signUp">{ isFetching ?<CircularProgress color="inherit" size="25px"/> : "Sign Up"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}