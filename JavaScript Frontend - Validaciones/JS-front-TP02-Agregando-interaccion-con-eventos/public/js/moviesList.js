window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let img = document.querySelector("img");

    img.addEventListener("mouseover", () => {
        body.style.backgroundColor = "#7f7f7f";
        body.classList.add("fondoMoviesList");
    });

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    moviesListTitulo.addEventListener("mouseover", () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        
        moviesListTitulo.style.color = randomColor;
      });
}