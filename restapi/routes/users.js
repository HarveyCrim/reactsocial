const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const express = require("express");
const User = require("../models/users");
const fileupload = require("express-fileupload");
userRouter.use(fileupload());
userRouter.use(express.urlencoded({extended : true}));
//update
userRouter.put("/:id" , async (req,res)=>{
    const id = req.params.id;
    if(req.body.id === id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch(error){
                res.json(error);
            }
        }
        try{
            const updated = await User.findByIdAndUpdate(id, req.body);
            res.status(200).json(updated);
        }
        catch(error){
            res.status(400).json(error);
        }
    }
    else{
        res.status(400).json("Can only update your account");
    }
})

//delete
userRouter.delete("/:id" , async (req,res)=>{
    const id = req.params.id;
    if(req.body.id === id || req.body.isAdmin){
        try{
            await User.findByIdAndRemove(id);
            res.status(200).json("deleted");
        }
        catch(error){
            res.status(400).json(error);
        }
    }
    else{
        res.status(400).json("Can only update your account");
    }
})

//get
userRouter.get("/:id" , async (req,res)=>{
    const id = req.params.id;
    if(req.body.id === id || req.body.isAdmin){
        try{
            const user = await User.findById(id);
            const {password, updatedAt, ...other} = user._doc;
            res.status(200).json(other);
        }
        catch(error){
            res.status(400).json(error);
        }
    }
    else{
        res.status(400).json("Can only update your account");
    }
})

//follow
userRouter.put("/:id/follow", async (req,res)=>{
    if(!(req.body.id === req.params.id)){
        const user1 = await User.findById(req.body.id);
        const user2 = await User.findById(req.params.id);
        const user2Array = user2.followers;
        const user1Array = user1.following;
        if(!user2Array.includes(req.body.id)) {
            user2Array.push(req.body.id);
            user1Array.push(req.params.id);
            await User.findByIdAndUpdate(req.params.id, {followers : user2Array});
            await User.findByIdAndUpdate(req.body.id, {following : user1Array});
            res.status(200).json("followed successfully");
        }
        else{
            res.status(401).json("Already followed");
        }
    }
    else{
        res.status(403).json("cannot follow yourself");
    }
})

//unfollow
userRouter.put("/:id/unfollow", async (req,res)=>{
    if(!(req.body.id === req.params.id)){
        const user1 = await User.findById(req.body.id);
        const user2 = await User.findById(req.params.id);
        const user2Array = user2.followers;
        const user1Array = user1.following;
        if(user2Array.includes(req.body.id)) {
            let index1 = user2Array.indexOf(req.body.id);
            let index2 = user1Array.indexOf(req.params.id);
            user2Array.splice(index1, 1);
            user1Array.splice(index2, 1);
            await User.findByIdAndUpdate(req.params.id, {followers : user2Array});
            await User.findByIdAndUpdate(req.body.id, {following : user1Array});
            res.status(200).json("unfollowed successfully");
        }
        else{
            res.status(401).json("never followed");
        }
    }
    else{
        res.status(403).json("cannot unfollow yourself");
    }
})

module.exports = userRouter;