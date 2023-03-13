import { useContext } from "react";
import { ppContext } from "./ppContext";
export const AuthReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN_START":
            console.log("starting");
            return {
                user : null,
                isFetching : true,
                err : null
            }
        case "LOGIN_SUCCESS":
            // setUserData({type:"INITIAL" ,payload : action.payload});
            return {
                user : action.payload,
                isFetching : false,
                err : null
            }
        case "LOGIN_FAILURE":
            console.log("error");
            return {
                user : null,
                isFetching : false,
                err : action.payload
            }
        default:
            return state;
    }
}