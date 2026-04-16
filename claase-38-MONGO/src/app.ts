import express  from "express";
import cors from "cors"
import connectBD from "./db/mongo";
import router from "./routes/product.route";
import dotenv from "dotenv"

dotenv.config() //para usar el .env

const app = express()

connectBD()

app.use(cors())
app.use(express.json())

app.use("/products", router)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el localhost:3000`);
    
})

/*
--------- connectDB()

👉 conecta a Mongo

-------- app.use(cors())

👉 permite frontend

---------- express.json()

👉 permite leer JSON

---------- /products

👉 endpoint base */