const $section = document.getElementById("films")

const fetchingFilms = async () =>{
    const response = await fetch("https://ghibliapi.vercel.app/films")
    console.log(response);
    
    if(!response.ok){
        alert("No se ha podido realizar la solicitud ")
        return
    }

    const films = await response.json()
    console.log(films);
    
    films.forEach(film => {
        $section.innerHTML += `<div>
        <img src = "${film.image}">
        <h2>${film.title}</h2>
        <p>Anio de estreno: ${film.release_date}</p>
        <meter id="combustible" min="0" max="100" low="30" high="80" optimum="90" value="${film.rt_score}">
        25%
        </meter>
        </div>`
    });

    
}
fetchingFilms()