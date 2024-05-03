let Heroes = [];

document.getElementById("btn_safe").addEventListener("click", function(){
    const HeroesData = {
        Name: document.getElementById("inputName").value,
        Actor: document.getElementById("inputActor").value,
        Address: document.getElementById("inputAddress").value,
        Ubicacion: document.getElementById("inputUbicacion").value,
        Poster: document.getElementById("inputPoster").value,
        Date: document.getElementById("data").value,
        Productora: document.getElementById("category").value,
    };

    Heroes.push(HeroesData);

    mostrarHeroes(); 
});

function mostrarHeroes() {
    let heroesContainer = document.getElementById("heroesContainer");
    heroesContainer.innerHTML = "";

    Heroes.forEach(function(hero) {
        let heroDiv = document.createElement("div");
        heroDiv.classList.add("card", "mb-3");
        heroDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${hero.Name}</h5>
                <p class="card-text">Actor: ${hero.Actor}</p>
                <p class="card-text">Edad Actor: ${hero.Address}</p>
                <p class="card-text">Ubicación: ${hero.Ubicacion}</p>
                <p class="card-text">Fecha: ${hero.Date}</p>
                <p class="card-text">Productora: ${hero.Productora === "1" ? "Marvel" : "Dcomics"}</p>
                <p class="card-text">Poster: ${hero.Poster}</p>
            </div>
        `;
        heroesContainer.appendChild(heroDiv);
    });
}
function eliminarheroe(name) {
    const index = Heroes.findIndex(heroe => heroe.Name === name);
    if (index !== -1) {
        Heroes.splice(index, 1);
        mostrarHeroes();
    }
}

//la funcion eliminar no se pudo completar unu
