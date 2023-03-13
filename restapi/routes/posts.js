const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/users");
//create
router.post("/", async (req,res)=>{
    try{
        const postCreated = await Post.create(req.body);
        res.status(200).json(postCreated);
    }
    catch(err){
        res.status(400).json("error");
    }
})

//update
router.put("/:id", async (req,res)=>{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.id){
        try{
            await Post.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json("updated post");
        }
        catch(err){
            res.json(err);
        }
    }
    else{
        res.status(400).json("can only modify your post")
    }
})

//delete
router.delete("/:id", async (req, res)=>{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
        try{
            await Post.findByIdAndRemove(req.params.id);
            res.status(200).json("deleted");
        }catch(err){
            res.json(err);
        }
    }
    else{
        res.status(400).json("can only delete your own posts")
    }
})

//like
router.put("/:id/like" , async (req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.id)){
        const arr = post.likes;
        arr.push(req.body.id);
        try{
            await Post.findByIdAndUpdate(req.params.id, {likes : arr});
            res.status(200).json("liked");
        }
        catch(err){
            res.json(err);
        }  
    }
    else{
        const arr = post.likes;
        let index = arr.indexOf(req.body.id);
        arr.splice(index, 1);
        try{
            await Post.findByIdAndUpdate(req.params.id, {likes : arr});
            res.status(200).json("disliked");
        }
        catch(err){
            res.json(err);
        } 
    }
})

//get
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id).populate("userId");
        res.status(200).json(post);
    }
    catch(err){
        res.json(err);
    }
})

//getAll
router.get("/profile/:username", async (req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        const posts = await Post.find({userId : user._id});
        res.status(200).json(posts);
    }
    catch(err){
        res.json(err);
    }
})

//getUser
router.get("/user/:username", async (req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        res.status(200).json(user);
    }
    catch(err){
        res.json(err);
    }
})


//timeline
router.get("/timeline/:id" , async (req,res)=>{
    try{
        const currentUser = await User.findById(req.params.id);
        let posts = await Post.find({userId : currentUser._id}).populate("userId");
        for(let i = 0; i < currentUser.following.length; i++){
            posts = posts.concat(...await Post.find({userId : currentUser.following[i]}).populate("userId"));
        }
        res.status(200).json(posts);
        }
    catch(err){
        res.json(err);
    }
}
);

module.exports = router;