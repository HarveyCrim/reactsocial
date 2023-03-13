import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../context/AuthContext";
import "./profileElement.css";
import {storage} from "../../firebase";
import {v4} from "uuid";
import{ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { ppContext, PpContextProvider } from "../context/ppContext";
export default function ProfileElement(props){
    const inputref = useRef();
    const[dp, setDp] = useState(null);
    const[newDesc, setNewDesc] = useState();
    const{userData,setUserData} = useContext(ppContext);
    const {user} = useContext(authContext);
    const[cover, setCover] = useState(null);
    const[coverUrl, setCoverUrl] = useState(null);
    const[openEditor, setOpenEditor] = useState(false);
    useEffect(()=>{
        if(dp){
            const imgref = ref(storage,`images/${dp.name + v4()}`);
            const uploaded = uploadBytes(imgref,dp).then(uploadResult=>{
                getDownloadURL(uploadResult.ref).then(url=>{
                    axios.put(`http://localhost:4000/api/users/${user._id}`,{
                        profilePic: url,
                        id : user._id
                    }).then(
                        setUserData({type : "PROFILE_PIC", payload : url})
                    )
                    
                }
                )
            }

            );
            
        }
    },[dp]);
    useEffect(()=>{
        if(cover){
            const imgref = ref(storage,`images/${cover.name + v4()}`);
            const uploaded = uploadBytes(imgref,cover).then(uploadResult=>{
                getDownloadURL(uploadResult.ref).then(url=>{
                    axios.put(`http://localhost:4000/api/users/${user._id}`,{
                        coverPhoto: url,
                        id : user._id
                    }).then(
                        setCoverUrl(url)   
                    )
                }
                )
            }

            );
        }
    },[cover]);
    if(userData){
        console.log("finallu");
    }
    console.log(userData);
    document.addEventListener("mousedown",(e)=>{
        if(!inputref.current.contains(e.target)){
            setOpenEditor(false);
        }
    })
    async function setUserDesc(){
        setUserData({type : "DESC", payload : newDesc})
        setOpenEditor(false);
        await axios.put(`http://localhost:4000/api/users/${user._id}`,{
            desc: newDesc,
                        id : user._id
        });
    }
    return (
        <PpContextProvider><div className = "profileElementContainer">
            <div className = "imagesAll">
                <label for ="cover" style = {{cursor:"pointer"}}><img className = "coverPic" src = {coverUrl ? coverUrl : user.coverPhoto} alt ="" /></label>
                <input onChange={(e)=>{setCover(e.target.files[0])}} style = {{display:"none"}} id = "cover"type = "file" accept="image/jpg, image/png"/>
                <div className = "dp">
                    <label for = "dp" style = {{cursor:"pointer"}}><img className = "dpinput" src = {userData ? userData.profilePic : user.profilePic} alt="" /></label>
                </div>
                <input onChange={(e)=>{setDp(e.target.files[0])}} style = {{display:"none"}} id = "dp" type = "file" accept="image/jpg, image/png"/>
            </div>
            <div className = "infoData">
                <h1>{user.username}</h1>
                <div ref = {inputref} clasName = "editBox">
                {!openEditor && <p className = "editBoxpara" onClick = {()=>{setOpenEditor(true)}}>{userData && userData.desc ? userData.desc : user.desc}</p>}
                {openEditor && <div><input onChange = {(e)=>{setNewDesc(e.target.value)}}type = "text" className="editInput"/><button onClick = {setUserDesc}>edit</button></div>}
                </div>
            </div>
        </div> </PpContextProvider>
    )
}