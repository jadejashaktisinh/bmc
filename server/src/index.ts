import { createServer } from "http";
import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("working");
});
const httpServer = createServer(app);

httpServer.listen(5000, () => { 
    console.log('listing to 5000');
});