window.onload = function() {
    let titulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let errores = document.querySelector('.errores');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let form = document.querySelector('form.form');
    let title = document.querySelector('#title');
    let rating = document.querySelector('#rating');
    let awards = document.querySelector('#awards');
    let release_date = document.querySelector('#release_date');
    let length = document.querySelector('#length');
    let genre_id = document.querySelector('#genre_id');

    title.focus();

    let errors = [];

    title.addEventListener('blur', () => {
        if (title.value == '') {
            title.classList.add('is-invalid');
            title.style.border = '1px solid red';
            errors.push('Debe llevar un título');
        } else {
            title.classList.remove('is-invalid');
            title.classList.add('is-valid');
            title.style.border = '1px solid green';
            errors = [];
        }
    });

    awards.addEventListener('blur', () => {
        if (awards.value == '') {
            awards.classList.add('is-invalid');
            awards.style.border = '1px solid red';
            errors.push('El premio no puede estar vacío');
        } else if (awards.value < 0 || awards.value > 10) {
            awards.classList.add('is-invalid');
            awards.style.border = '1px solid red';
            errors.push('Ingrese valores entre 0 y 10');
        } else {
            awards.classList.remove('is-invalid');
            awards.classList.add('is-valid');
            awards.style.border = '1px solid green';
            errors = [];
        }
    });

    release_date.addEventListener('blur', () => {
        if (release_date.value == '') {
            release_date.classList.add('is-invalid');
            release_date.style.border = '1px solid red';
            errors.push('Debes introducir una fecha');
        } else {
            release_date.classList.remove('is-invalid');
            release_date.classList.add('is-valid');
            release_date.style.border = '1px solid green';
            errors = [];
        }
    });

    rating.addEventListener('blur', () => {
        if (rating.value == '') {
            rating.classList.add('is-invalid');
            rating.style.border = '1px solid red';
            errors.push('Debes agregar una calificación');
        } else if (rating.value < 0 || rating.value > 10) {
            rating.classList.add('is-invalid');
            rating.style.border = '1px solid red';
            errors.push('Ingrese valores entre 0 y 10');
        } else {
            rating.classList.remove('is-invalid');
            rating.classList.add('is-valid');
            rating.style.border = '1px solid green';
            errors = [];
        }
    });

    length.addEventListener('blur', () => {
        if (length.value == '') {
            length.classList.add('is-invalid');
            length.style.border = '1px solid red';
            errors.push('La duración no puede estar vacía');
        } else if (length.value < 60 || length.value > 360) {
            length.classList.add('is-invalid');
            length.style.border = '1px solid red';
            errors.push('Ingrese valores entre 60 y 360');
        } else {
            length.classList.remove('is-invalid');
            length.classList.add('is-valid');
            length.style.border = '1px solid green';
            errors = [];
        }
    });

    genre_id.addEventListener('blur', () => {
        if (!genre_id.value.trim()) {
            genre_id.classList.add('is-invalid');
            genre_id.style.border = '1px solid red';
            errors.push('Seleccione un género');
        } else {
            genre_id.classList.remove('is-invalid');
            genre_id.classList.add('is-valid');
            genre_id.style.border = '1px solid green';
            errors = [];
        }
    });

    form.addEventListener('submit', (e) => {
        errors = [];
        const FORM_ELEMENTS = e.target.elements;
        for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
            const element = FORM_ELEMENTS[index];
            element.dispatchEvent(new Event('blur'));
        }
        if (errors.length > 0) {
            e.preventDefault();
            errores.classList.add('alert-warning');
            errores.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                errores.innerHTML += '<li>' + errors[i] + '</li>';
            }
        } else {
            alert('¡Se guardó con éxito la película!');
        }
    });
};