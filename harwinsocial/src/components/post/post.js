import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import "./post.css";
import TimeAgo from "timeago-react";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Post(props){
  
    return <div class = "postContainer">
        <div className = "postTop">
        <div className = "topPart1">
        <div className = "userData">
        <Link to = {`/profile/${props.username}`}>
            <img className = "dpImg"src = {props.dp ? props.dp : "./assets/person.png"} alt = ""/>
            </Link>
            <span class = "userName">{props.username}</span>
          
            <span class = "time"> <TimeAgo datetime = {props.time} /> </span>
        </div>
        <MoreVertIcon />
        </div>
        <p className = "postTitle">Hey! its my first post</p>
        </div>
        <div className = "postMiddle">
         <img src = "./assets/e2.png" alt = "" />
        </div>
        <div className = "postBottom">
            <div className = "bottomLeft">
        
                <ThumbUpIcon className = "likes"/>
                <ModeCommentIcon className = "comments"/>
                <SendIcon className = "shareClick"/>
            </div>
            <div className = "bottomRight">
                <span>10 comments</span>
            </div>
        </div>
    </div>
}