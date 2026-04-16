// 👉 conexión a base de datos
import mongoose from "mongoose" //librería que conecta Node con Mongo


//usamos async await porque conectar a DB tarda tiempo
const connectBD = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string)//abre conexión a la base de datos // as string typescript no sabe si existe entonces lo forzas
        console.log("MongoDB conectado");
    }
    catch(error){
        console.error("Error conectado Mongo: ", error);
        
    }
}

export default connectBD