class PokemonSearcher {
    constructor() {
        this.pokeName = document.querySelector('.pokename');
        this.pokeNumber = document.querySelector('.pokenumber');
        this.pokeImage = document.querySelector('.pokeimagen');
        this.form = document.querySelector('.form');
        this.input = document.querySelector('.buscador');
        this.buttonPrev = document.querySelector('.buttonprev');
        this.buttonNext = document.querySelector('.buttonnext');
        this.currentPokemon = 1;

        this.registerEventListeners();
        this.fetchAndDisplayPokemon(this.currentPokemon);
    }

    async fetchPokemon(pokemon) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokemon');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async fetchAndDisplayPokemon(pokemon) {
        this.pokeName.textContent = 'Loading...';
        this.pokeNumber.textContent = '';
        this.pokeImage.style.display = 'none';

        const data = await this.fetchPokemon(pokemon);
        if (data) {
            this.pokeImage.style.display = 'block';
            this.pokeName.textContent = data.name;
            this.pokeNumber.textContent = data.id;
            
            // Verificar si la propiedad 'sprites' está presente en los datos
            if (data.sprites) {
                // Verificar si la propiedad 'other' y 'showdown' están presentes en los datos
                if (data.sprites.other && data.sprites.other.showdown && data.sprites.other.showdown.front_default) {
                    // Asignar la imagen al src del elemento img
                    this.pokeImage.src = data.sprites.other.showdown.front_default;
                } else if (data.sprites.front_default) {
                    // Si no se encuentra la imagen 'other' y 'showdown', usar la imagen por defecto
                    this.pokeImage.src = data.sprites.front_default;
                }
            } else {
                // Si no se encuentran sprites, mostrar un mensaje de error
                this.pokeImage.src = ''; // Limpiar la imagen
                this.pokeImage.alt = 'Image not found';
            }
            
            this.input.value = '';
            this.currentPokemon = data.id;
        } else {
            this.pokeName.textContent = 'Not found';
        }
    }

    registerEventListeners() {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.fetchAndDisplayPokemon(this.input.value.toLowerCase());
        });

        this.buttonPrev.addEventListener('click', () => {
            if (this.currentPokemon > 1) {
                this.fetchAndDisplayPokemon(--this.currentPokemon);
            }
        });

        this.buttonNext.addEventListener('click', () => {
            this.fetchAndDisplayPokemon(++this.currentPokemon);
        });
    }
}

new PokemonSearcher();
