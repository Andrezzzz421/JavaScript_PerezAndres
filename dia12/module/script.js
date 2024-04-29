class CartaSearch {
    constructor() {
        this.cartaImage = document.querySelector('.carta img');
        this.inputNumber = document.querySelector('.inc');
        this.inputType = document.querySelector('.inc2');
        this.buttonYes = document.querySelector('.buttonSI');
        this.buttonNo = document.querySelector('.buttonNO');
        this.alertText = document.querySelector('.alert');

        // this.cartaImage.src = '../dia12/storage/imagenvolteada.png';

        this.cartas = [];

        this.init();
    }

    init() {
        this.buttonYes.addEventListener('click', this.verificarCarta.bind(this, true));
        this.buttonNo.addEventListener('click', this.verificarCarta.bind(this, false));
    }

    verificarCarta(esCarta) {
        const numero = this.inputNumber.value.trim();
        const tipo = this.inputType.value.trim();
        
        if (numero !== '' && tipo !== '') {
            const carta = `${numero}${tipo.toUpperCase()}`;
            this.cartas.push(carta);

            if (esCarta) {
                this.mostrarCarta(carta);
                this.alertText.textContent = '¿Es esta tu carta?';
            } else {
                this.obtenerNuevaCarta();
            }
        } else {
            this.alertText.textContent = 'Por favor, ingresa el número y el tipo de la carta.';
        }
    }

    obtenerNuevaCarta() {
        // Hacer la solicitud a la API para obtener una nueva carta
        // Supongamos que tu API está en la URL 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(response => response.json())
            .then(data => {
                // Verificar si se recibió una carta válida
                if (data.cards.length > 0) {
                    const nuevaCarta = data.cards[0].image;
                    this.mostrarCarta(nuevaCarta);
                    this.alertText.textContent = '¿Qué tal esta carta?';
                } else {
                    throw new Error('No se recibió ninguna carta válida.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la carta:', error);
                this.alertText.textContent = 'Lo siento, ha ocurrido un error al obtener la carta.';
            });
    }

    mostrarCarta(imagen) {
        this.cartaImage.src = imagen;
    }
}

const juegoCartas = new CartaSearch();
