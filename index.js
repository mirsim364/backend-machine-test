import express, { json, response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import registRouter from "./router/registRouter.js";

const app = express();
const port=6000;
connectDb();
dotenv.config();
app.use(cors())
app.use(express.json());

app.use("/api/reg", registRouter);




app.listen(port,()=>{
    console.log(`server is running on port ${port}}`);
})
                