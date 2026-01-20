const $form = document.getElementById("form")
const $climaView = document.getElementById("clima")
const $inputPais = document.getElementById("pais")
const $inputProvincia = document.getElementById("provincia")

const fragment = document.createDocumentFragment()

const apiClima = async (latitud, longitud) =>{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    // console.log(response);
    
    const data = await response.json()
    const times = data.hourly.time
    const temperatures = data.hourly.temperature_2m
    const humiditys = data.hourly.relative_humidity_2m
    const windSpeed = data.hourly.wind_speed_10m
    console.log(data.hourly);

    times.forEach((time, index)=>{
        // console.log(time);
        const fecha = new Date(time)

        const card = document.createElement("div")
        card.classList.add("tarjeta")

        const h2 = document.createElement("h2")
        if(index <= 23){
            h2.textContent = `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDay()}`
        }
        else{
            h2.textContent = `no`
        }

        const p1 = document.createElement("p")
        p1.textContent = ` Hora: ${fecha.getHours()}:00`
        const p0 = document.createElement("p")
        p0.textContent = `Temperatura: ${temperatures[index]} ${data.hourly_units.temperature_2m}`
        const p2 = document.createElement("p")
        p2.textContent = `Humedad: ${humiditys[index]} ${data.hourly_units.relative_humidity_2m}`
        const p3 = document.createElement("p")
        p3.textContent = `Velocidad del viento: ${windSpeed[index]} ${data.hourly_units.wind_speed_10m}`

        card.appendChild(h2)
        card.appendChild(p1)
        card.appendChild(p0)
        card.appendChild(p2)
        card.appendChild(p3)

        fragment.appendChild(card)
    })

    $climaView.appendChild(fragment)
}

//---------------------
//--------funsionj para consumir la api de paises
//----------------------------
async function apiCountries(pais, provincia){
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${provincia}&count=100&language=en&format=json`)

    const data = await response.json()
    // console.log(data);

    const paisBusqueda = data.results.find((country)=> normalizarTexto(country.name) === normalizarTexto(provincia) && normalizarTexto(country.country) === normalizarTexto(pais))
    console.log(paisBusqueda);
    
    apiClima(paisBusqueda.latitude, paisBusqueda.longitude)

}


//------------------------------------
//------evento al enviar el from / buscar
//-----------------------------------------
$form.addEventListener("submit", (e)=>{
    e.preventDefault()

    apiCountries($inputPais.value, $inputProvincia.value)
    
})


//-------------------------------------------
//----funcion para normalizar los textos:
//-----------------------------------------
function normalizarTexto(texto) {
  return texto
    .toUpperCase()
    .normalize("NFD")               // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .trim();
}