console.log("hola dany");

let pasar = true || false || false//nos da true ya que al menos una es true

console.log(pasar);

pasar = false || false //nos da false ya que todas son false 

console.log(pasar);

const seleccionarArchivo = document.querySelector(".archivo");
const boton = document.querySelector(".boton")

seleccionarArchivo.accept= "image/png";
boton.addEventListener("click", ()=>{
    // console.log(seleccionarArchivo.value)
    console.log(seleccionarArchivo.name);
    console.log(seleccionarArchivo.size);
    console.log(seleccionarArchivo.type);
})