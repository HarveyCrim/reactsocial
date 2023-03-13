import  {createContext,useReducer} from "react";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE = {
    user : null,
    isFetching : false,
    error : null
}

export const authContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return <authContext.Provider value = {{INITIAL_STATE,user : state.user, isFetching: state.isFetching,error:state.error,dispatch}}>
        {children}
    </authContext.Provider>
}

