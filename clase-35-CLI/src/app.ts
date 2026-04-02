import { addproduct, getProducts } from "./services/product.service";

// leesmos los argumentos
const args = process.argv

// console.log(comand[4]);

// guardamos el comando
const comand:string = args[2]

if(comand === "add"){
    const name = args[3]
    const price = Number(args[4])

    addproduct(name,price)
}

if(comand === "list"){
    const products = getProducts()
    console.log(products);
    
}