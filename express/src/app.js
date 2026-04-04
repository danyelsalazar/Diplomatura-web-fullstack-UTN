import express from 'express';
import { router } from './routes/user.routes.js';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Servidor funcionando");
// })

// 👇 ACA VA EL MIDDLEWARE
app.use(express.json());

app.use("/api",router)

app.listen(3000, () =>{
    console.log("Servidor en http://localhost:3000");
})