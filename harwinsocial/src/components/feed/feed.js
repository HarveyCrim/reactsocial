import Share from "../shareComp/share";
import Post from "../post/post";
import "./feed.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContext";
export default function Feed(props){
    const [posts, setPosts] = useState([]);
    const {user} = useContext(authContext);
    useEffect(()=>{
        const fetch = async ()=>{
            const response = props.username == user.username? await axios.get("http://localhost:4000/api/posts/timeline/6407f1b0ff74e4320df785bd") :
            await axios.get(`http://localhost:4000/api/posts/profile/${user.username}`);
            console.log(response.data);
            setPosts(response.data);
        }
       fetch();
    },[]);
    return(
    <div className = "feedContainer">
     {props.username == "harwin"&& <Share username = {user.username} img = {user.profilePic} />}
     {/* {posts?.map(post=>{return <Post time = {post.createdAt} username = {post.userId.username} dp = {post.userId.profilePic} id = {post.userId._id}/>})} */}
    </div>)
}