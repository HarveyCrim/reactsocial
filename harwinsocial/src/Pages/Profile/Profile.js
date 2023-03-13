import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import {useParams} from "react-router-dom";
import axios from "axios";
import ProfileRightBar from "../../components/profileRIghtBar/profileRightBar";
import Feed from "../../components/feed/feed";
import ProfileElement from "../../components/profileElement/profileElement";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../components/context/AuthContext";
import Share from "../../components/shareComp/share";
export default function Profile(){
    const [alldata, setData] = useState();
    const {username : user} = useParams();
    const {user : currentUser} = useContext(authContext);
    useEffect(()=>{
        const getUser = async ()=>{
            const response = await axios.get(`http://localhost:4000/api/posts/user/${user}`);
            console.log(response.data);
            setData(response.data);
        }
        getUser();
    },[]);
    
    return <>
    {alldata && <Topbar img = {alldata.profilePic}/>}
    {alldata && <div className = "organizerProfile">
        <div className = "left">
            <Sidebar />
        </div>
        <div className = "middle">
            <ProfileElement cover = {alldata.coverPhoto} username = {alldata.username} img = {alldata.profilePic}/>
            <div className = "splitTheTwo">
            <div className = "myFeed">
            {/* {currentUser.username == user && <Share />} */}
             <Feed username = {user.username} />
             </div>
             <div className = "myRightBar">
             <ProfileRightBar />
             </div>
             </div>
        </div>
    </div>}
    </>
}