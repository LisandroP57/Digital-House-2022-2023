        /* Micro desafío - Paso 1 - Palavecino Lisandro: */
const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const links = document.querySelector('a');
const parrafos = document.querySelectorAll('p');

const nombre = prompt("Ingrese su nombre");
if (nombre) {
    h2.innerText = `Bienvenido ${nombre}!`
} else {
    h2.innerText = 'Bienvenido Invitado'
}

h2.style.textTransform = 'uppercase';
links.style.color = '#E51B3E';

if (confirm('Desea colocar un fondo de pantalla?')) {
    document.body.classList.add('fondo');
}

parrafos.forEach((parrafos, index) => {
    if (index % 2 === 0) {
        parrafos.classList.add("destacadoPar")
    } else {
        parrafos.classList.add("destacadoImpar")
    }
});

main.style.display = 'block';