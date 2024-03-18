const idiomaActual = document.getElementById("idioma");
const listaIdiomas = document.getElementById("idiomas");
const idiomas = document.getElementsByClassName("opcion");

/* Toggle de opcion idiomas*/

idiomaActual.addEventListener("click", () => {
    listaIdiomas.classList.toggle("toggle");
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        const idioma = opcion.getElementsByTagName('span')[0];
        console.log(idioma);
    });
});
