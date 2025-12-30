function comer(){
    console.log("hola bienvenido");
    
}
comer()

const cargar = (e)=>{
    return `hola esta cargando la pagina , bienvenido ${e}`
}

console.log(cargar("danyel"))

// aqui hacemos la funcion flecha corta y esta ya hace un return automaticamente:
const cargar2 = (e) => `hola esta cargando la pagina 2, bienvenido ${e}`

console.log(cargar2('danyel'));


// --------------------tipos de for--------------------
// ----------------------------------------
let epocas = ["verano","invierno","otonio","primavera"]

// fOR IN -------------------- NOS devuelve el nimero de posicion 
for(let epoca in epocas){
    console.log(epoca);
}

//FOR OF--------------------nos devuelve el elemnto
for(let epoca of epocas){
    console.log(epoca);
    
}

const objetoVerano = {
    nombre: 'verano',
    descripcion: 'Dias calurosos con gran probabilidades de quemaduras por rayos solares',
    darSol: ()=>{
        return "Esta amaneciendo"
    },
    quitarSol: ()=>{
        return 'Esta anocheciendo'
    }
}

console.log(objetoVerano.darSol());
// ----------------------------------------

let hora = new Date()
console.log(hora.getHours(), hora.getDate(), hora.getDay());


const crearTablaMultiplicar = (num)=>{

    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i}: ${num*i}`);
        
    }
}

crearTablaMultiplicar(2)

console.log("-------------------------------------");

const crearTablaMultiplicarCompleta = ()=>{

    for(let i = 1; i <= 10; i++){
        console.log(`--Tabla del ${i}--`);
        
        for(let j = 1; j <= 10 ; j++){
                console.log(`${i} x ${j}: ${i*j}`);
        }
        
    }
}

crearTablaMultiplicarCompleta()

console.log("------------------------------");

const carrito =  [
    {
        nombre: "Computadora",
        precio: 12000
    },
    {
        nombre: "Celular",
        precio: 2300
    }
]


for(let producto of carrito){
    console.log(producto.nombre);
}