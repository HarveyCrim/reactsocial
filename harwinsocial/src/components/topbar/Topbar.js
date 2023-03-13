import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import "./Topbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { ppContext, PpContextProvider } from '../context/ppContext';
export default function Topbar(props){
    const {user} = useContext(authContext);
    const {userData} = useContext(ppContext);
    return <PpContextProvider><div className="topBarContainer">
        <div className = "logo">
            <h1>ReactSocial</h1>
        </div>
        <div className = "searchBoxAndOps">
        <div className = "searchBox">
        <span><SearchIcon /></span>
        <input type = "text" placeholder="search for a million things"/>
        </div>
        <span>Home</span>
        <span>Timeline</span>
        </div>
        <div className = "topBarIcons">
            <div className = "customIcon">
            <PersonIcon />
            <div className = "circularIcon">
                <span>1</span>
            </div>
            </div>
            <div className = "customIcon">
            <ChatIcon />
            <div className = "circularIcon">
                <span>2</span>
            </div>
            </div>
            <div className = "customIcon">
            <NotificationsIcon />
            <div className = "circularIcon">
                <span>1</span>
            </div>
            </div>
        </div>
        <Link to = {`/profile/${user.username}`}>
        <div className = "profile">
            <img src = {userData ? userData.profilePic : user.profilePic} alt=""/>
        </div>
        </Link>
    </div></PpContextProvider>
}