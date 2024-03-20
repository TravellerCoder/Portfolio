
const idiomaActual = document.getElementById("idioma");
const listaIdiomas = document.getElementById("idiomas");
const idiomas = document.getElementsByClassName("opcion");
const english = document.getElementById("english");
const spanish = document.getElementById("spanish");

/* Toggle de opcion idiomas*/

idiomaActual.addEventListener("click", () => {
    listaIdiomas.classList.toggle("toggle");
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        const idioma = opcion.textContent.trim();
        establecerIdioma(idioma);
    });
});

function establecerIdioma(idioma) { 
    idiomaActual.getElementsByTagName('img')[0].src = `../images/${idioma}.png`;
    
    if (idioma === 'English'){
        window.location.href = '/english';
    } else if (idioma === 'Español'){
        window.location.href = '/';
    }

}

document.addEventListener(DOMContentLoaded, () => {
    console.log(navigator.language);
});



