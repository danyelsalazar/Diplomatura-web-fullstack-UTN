import { convertirDolarApesos } from "./services/operaciones.service";
// usamos los parametros 
const args = process.argv

console.log(args);

const operacion = args[2]
const dolar: number = Number(args[3])
const peso: number = Number(args[4])


if(operacion === "convertir"){
    console.log(convertirDolarApesos(dolar, peso));
    
}

switch(operacion){
    case "convertir":
        if(!args[3] || !args[4]){
            console.log("Falto un dato");
        }
        else{
            console.log(`${dolar} convertido a pesos seria: ${convertirDolarApesos(dolar, peso)} $`);
        }
        break;
    default:
        console.log(`
========================================
   💱 CONVERSOR DÓLAR → PESOS 💱
========================================

Bienvenido 👋

Ingresá:
- Monto en dólares 💵
- Cotización actual 📊

Y nosotros te devolvemos el resultado al instante ⚡

Ejemplo de uso:
npm run dev convertir 100 1200

========================================
`);
break;
}