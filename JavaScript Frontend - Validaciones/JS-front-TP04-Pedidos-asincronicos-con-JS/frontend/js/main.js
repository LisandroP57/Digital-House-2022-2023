window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  const response = "http://localhost:3031/api/movies";
  fetch(response)
    .then(respons => respons.json())
    .then(peliculas => {

      let data = peliculas.data;

      if (!localStorage.getItem("favoritas")) {
        const favoritas = []
        localStorage.setItem("favoritas", JSON.stringify(favoritas))
      }

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;
        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;
        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
  
        const fav = document.createElement("p");
        fav.innerHTML = "&#9734;";
        fav.classList.add("favorite");
        fav.setAttribute("id", movie.id)

        const favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
        if (favoritas.find(favorita => favorita.id === movie.id)) {
          fav.classList.add("disabled");
        }

        fav.addEventListener("click", (e) => {
          e.preventDefault()
          let favoritas = JSON.parse(localStorage.getItem("favoritas"))
          if (!favoritas.find(favorita => favorita.id === +e.target.id)) {
            favoritas.push(movie)
            fav.classList.add("disabled")
            fav.style.color = "goldenrod"
          } else {
            favoritas = favoritas.filter(favorita => favorita.id !== +e.target.id);
            fav.classList.remove("disabled");
            localStorage.removeItem("favoritas");
            localStorage.setItem("favoritas", JSON.stringify(favoritas));
          }
          localStorage.setItem("favoritas", JSON.stringify(favoritas))
        })
        card.appendChild(duracion);
        card.appendChild(fav);
      });
    })
  };