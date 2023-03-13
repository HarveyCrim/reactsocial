const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");
const background = "https://firebasestorage.googleapis.com/v0/b/reactsocial-3baab.appspot.com/o/insert.png?alt=media&token=0e3ecfa1-49b8-4a96-b908-1862ab85c454";
const url =  "https://firebasestorage.googleapis.com/v0/b/reactsocial-3baab.appspot.com/o/person.png?alt=media&token=9de94b14-ac22-4395-afee-c03098170246"
authRouter.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed  = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create({
            username : req.body.username, email : req.body.email, password: hashed, profilePic : url, coverPhoto: background
        });
        res.json(newUser);
    }
    catch(error){
        res.status(400).json("error");
        console.log(error);
    }
    
})
authRouter.post("/login", async (req,res)=>{
    try{
        const userFound = await User.findOne({email : req.body.email});
        !userFound && res.status(404).json("user not found");
        const validatePassword = await bcrypt.compare(req.body.password, userFound.password);
        !validatePassword && res.status(400).json("incorrect password");
        res.status(200).json(userFound);
    }
    catch(error){
        
    }
})

module.exports = authRouter;