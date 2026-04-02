import fs from "node:fs" // fs -> leer/escribir archivos
import path from "node:path" //path---> → manejar rutas correctamente
import { Product } from "../models/product.model" // Product --> tipado

// ruta del archivo
const filePath = path.join(__dirname, "../../data/products.json")

// funcion leer
export const getProducts = () : Product[] =>{
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
}

// funcion guardar
export const saveProducts = (products: Product[]) : void =>{
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
}

// agregar producto

export const addproduct = (name: string, price: number): void=>{
    const products = getProducts()

    const newProduct: Product = {
        id: Date.now(),
        name,
        price
    }

    products.push(newProduct)
    saveProducts(products)
    console.log("Producto agregado: ", newProduct);
    
}