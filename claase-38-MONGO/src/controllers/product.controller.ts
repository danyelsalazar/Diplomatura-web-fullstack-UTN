import { Request, Response } from "express";
import { Product } from "../models/product.model";

//--------------------------
//GETT
export const getProducts = async (req: Request, res: Response)=>{
    const products = await Product.find()
    res.json(products)
}

/**
 ----- Product.find()

👉 trae todos los documentos

----- res.json()

👉 responde al frontend
 */

//-----------------------
//CREATE


export const createProduct = async (req: Request, res: Response)=>{
    const  {name, price} = req.body;

    const product = new Product({name, price});
    await product.save()
    res.status(200).json(product)
}

/**
------- new Product()

👉 crea documento
------- save()

👉 lo guarda en Mongo
 */

//----------------------

//DELETE

export const deleteProduct = async (req: Request, res: Response )=>{
    
    try{
        const {id} = req.params

        const product = await Product.findByIdAndDelete(id);
    
        if(!product) return res.status(404).json({message: "El usuario no se encontro"});
    
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message: "Error del servidor"})
    }
    
}

// UPDATE

export const updateProduct = async(req: Request, res: Response)=>{

    try{
        const {id} = req.params
    
        const {name, price} = req.body
    
        if(!name || !price) return res.status(400).json({error: "faltaron datos"})
    
        const productUpdate = await Product.updateOne(
            { _id: id },
            { $set:{name, price}}
        )
        
        if(!productUpdate) return res.status(404).json({message: "usuario no encontrado"}) 

        res.status(200).json({message: "Usuario actualizado", _id: id})

    }catch(err){
        res.status(500).json({message: "error del servidor"})
    }
}