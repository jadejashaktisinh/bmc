import "dotenv/config"
import { createServer } from "http";
import express from "express";
import cors from 'cors';
import userAuthRouter from "./routes/user.auth.routes.js";
import BlogsRouter from "./routes/blog.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userAuthRouter);
app.use("/api", BlogsRouter);
app.get('/',(req,res)=>{
    res.send("working");
});
const httpServer = createServer(app);

httpServer.listen(5000, () => { 
    console.log('listing to 5000');
});