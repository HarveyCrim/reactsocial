import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import "./Home.css";
import Rightbar from "../../components/rightbar/rightbar";
import { useContext } from "react";
import { authContext } from "../../components/context/AuthContext";
export default function Home(){
    const {user} = useContext(authContext);
    console.log(user);
    return <><Topbar img = {user.profilePic}/>
    <div className = "organizer">
        <div className = "left">
            <Sidebar />
        </div>
        <div className = "middle">
            <Feed username = "harwin"/>
        </div>
        <div className = "right">
            <Rightbar />
        </div>
    </div>
    </>
}