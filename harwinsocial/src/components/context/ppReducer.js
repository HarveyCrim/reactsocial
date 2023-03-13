import { useContext } from "react";
import { authContext } from "./AuthContext";
export function PPReducer(state, action){
    const {user} = useContext(authContext);
    switch(action.type){
        case "INITIAL":
            return action.payload;
        case "PROFILE_PIC":
            const tempState = state ? state : user;
            tempState.profilePic = action.payload;
            return tempState;
        case "DESC":
            const tempState2 = state ? state : user;
            tempState2.desc = action.payload;
            console.log("here");
            return tempState2;
    }
}
