const $container= document.getElementById("root")

const getData = async ()=>{

    try {
        const response = await fetch ("http://universities.hipolabs.com/search?country=Argentina")
        console.log(response);
        
        if(response.ok){
            const universities = await response.json()

            console.log(universities);
            
            universities.forEach(university => {
                // console.log(university.name);
                $container.innerHTML += `<div class = "university">
                <h2>${university.name}</h2>
                <p>${university["state-province"] ?university["state-province"] : "provincia no reconocida"}</p>
                <a href="${university.web_pages}" target="_blank">Pagina web</a>
                </div>`
            });
        }
    }catch (error) {
        console.log("error al recibir la data");
        
    }
}

getData()