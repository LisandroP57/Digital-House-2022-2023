/* Micro desafío - Paso 2: */
const body = document.querySelector('body');
const listado = document.querySelector('h1');

const modoscuro = prompt("¿Desea modo oscuro?");
if (modoscuro.toLowerCase() === 'si') {
    body.classList.add("fondoMoviesList")
    body.style.backgroundColor = '#7f7f7f'
};

listado.innerText = 'LISTADO DE PELÍCULAS';
listado.style.color ="white";
listado.style.backgroundColor = "teal";
listado.style.padding = "20px";