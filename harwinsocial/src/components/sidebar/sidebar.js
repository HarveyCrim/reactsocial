import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import LeftFriend from "../leftFriend/leftFriend";
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
export default function Sidebar(){
    return(
    
    <div className = "sideBarContainer">
    <div className = "sidebar1">
        <div className = "card">
        <RssFeedIcon />
            <span>Feed</span>
        </div>
        <div className = "card">
        <ChatIcon />
            <span>Chats</span>
        </div>
        <div className = "card">
        <PlayCircleIcon />
            <span>Videos</span>
        </div>
        <div className = "card">
        <GroupIcon />
            <span>Groups</span>
        </div>
        <div className = "card">
        <BookmarkIcon />
            <span>Bookmarks</span>
        </div>
        <div className = "card">
            <HelpIcon />
            <span>Questions</span>
        </div>
        <div className = "card">
            <WorkIcon />
            <span>Jobs</span>
        </div>
        <div className = "card">
            <EventNoteIcon />
            <span>Events</span>
        </div>
        <div className = "card">
            <SchoolIcon />
            <span>Courses</span>
        </div>
            <button>Show More</button>
        </div>
        <hr className = "myLine"></hr>
    <div className = "friendsList">
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
        <LeftFriend />
    </div>
    </div>
    )
}