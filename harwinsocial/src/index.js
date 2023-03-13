import ReactDOM from "react-dom";
import App from "./App";
import { PpContextProvider } from "./components/context/ppContext";
import {AuthContextProvider} from "./components/context/AuthContext"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthContextProvider><PpContextProvider><App /></PpContextProvider></AuthContextProvider>);