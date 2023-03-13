import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import "./share.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share(props){
    return(
        <div className = "shareContainer">
        <div className = "topComp">
            <img src = {props.img} alt="" />
            <input className = "shareIt"type = "text" placeholder={"What's on your mind " +props.username+" ?"}/>
        </div>
        <hr className = "separator" />
        <div className = "bottomPart">
        <div className = "bottomButtons">
            <div className = "nuggets">
                <PhotoLibraryIcon className = "photos"/>
                <span>photos</span>
            </div>
            <div className = "nuggets">
                <LabelIcon className = "tag"/>
                <span>tag</span>
            </div>
            <div className = "nuggets">
                <LocationOnIcon className = "location"/>
                <span>location</span>
            </div>
            <div className = "nuggets">
                <EmojiEmotionsIcon className = "emoji"/>
                <span>feelings</span>
            </div>
        </div>
        <button className = "shareButton">share</button>
        </div>
        </div>
    )
}