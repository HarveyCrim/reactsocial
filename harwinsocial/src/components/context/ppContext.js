import  {createContext,useContext,useReducer,useState} from "react";
import { authContext } from "./AuthContext";
import { PPReducer } from "./ppReducer";
export const ppContext = createContext();

export const PpContextProvider = ({children})=>{
    const [userData, setUserData] = useReducer(PPReducer,null);
    return <ppContext.Provider value = {{userData, setUserData}}>
        {children}
    </ppContext.Provider>
}

