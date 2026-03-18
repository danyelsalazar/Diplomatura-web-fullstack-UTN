const { log } = require("console")
const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Estoy aprendiendo backend con Node")
})

server.listen(3000, () => {
  console.log("servidor corriendo en puerto 3000")
})

const pedidos = [
    {
        producto: "PS5",
        precio: 750000
    },
    {
        producto: "Samsung S23 ULTRA",
        precio: 450000
    },
    {
        producto: "Nintendo ds",
        precio: 120000

    }
]

let masCaros = pedidos.filter((producto) =>{
    return producto.precio > 500000
})

console.log(masCaros);

let menosCaro = pedidos.find( (producto)=>{
    return producto.precio < 500000 && !(producto.precio >= 450000)
})

console.log(menosCaro);
