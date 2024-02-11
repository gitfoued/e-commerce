import app from "./sever.js";
import * as dotenv from "dotenv"
dotenv.config();
const port=process.env.port;
app.listen(port,()=>{
    console.log(`le server run en ${port}`)
})