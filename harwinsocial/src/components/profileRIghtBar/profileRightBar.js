import "./profileRightBar.css";
import FriendsList from "../friendsList/friendsList";
export default function ProfileRightBar(){
    return (
        <div className = "customRightBar">
            <h1>User Information</h1>
            <div className = "dataProfile">
                <p>City : New Delhi</p>
                <p>From : New Delhi</p>
                <p>Relationship : Player</p>
            </div>
                <h1 className = "FriendsHeading">Friends</h1>
                <FriendsList />
        </div>
    )
}