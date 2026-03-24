const add = (a, b)=>{
    if(typeof a !== 'number'|| typeof b !== 'number'){
        return "Error deben ser numeros"
        
    }
    else{
        return a + b;
        
    }
}

export {add}