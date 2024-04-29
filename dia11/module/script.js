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
            const sprites = data.sprites.versions['generation-v']['black-white'].animated;
            if (sprites && sprites.front_default) {
                this.pokeImage.src = sprites.front_default;
            } else {
                this.pokeImage.src = data.sprites.front_default;
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
