export const convertirDolarApesos = (dolares: number, valorDolarPeso: number): number|string =>{

    if(isNaN(dolares) || isNaN(valorDolarPeso)){
        return "Los datos deben ser numericos";
    }

    return dolares * valorDolarPeso
}
