import "./rightbar.css";
import RightFriend from "../rightFriend/rightFriend";
export default function Rightbar(){
    return (
        <div className = "rightbarContainer">
            <div className = "imageContainer">
            <img src = "./assets/b1.png" alt="" className = "largeImage" />
            <div className = "textForImage">
                <h4>Nothing tastes this good.</h4>
            </div>
            </div>
            <div className = "onlineFriends">
                <p className = "friendsTitle">Online Friends</p>
                <div className = "friendsList">
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                    <RightFriend />
                </div>
            </div>
        </div>
    )
}