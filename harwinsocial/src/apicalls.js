import axios from "axios";
export const loginCall = async(userCredentials, dispatch)=>{
    console.log("inside");
    dispatch({type : "LOGIN_START"});
    try{
        const response = await axios.post("http://localhost:4000/api/auth/login", userCredentials);
        console.log(response.data);
        dispatch({type : "LOGIN_SUCCESS", payload : response.data})
    }
    catch(err){
        dispatch({type : "LOGIN_FAILURE", payload : err})
    }}

