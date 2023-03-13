const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
dotenv.config();
const PORT = process.env.PORT | 4000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use("/api/users", userRouter);
app.use("/api/auth" , authRouter);
app.use("/api/posts" , postRouter);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true});

app.listen(PORT,()=>{
    console.log("running succesfully " + PORT);
});