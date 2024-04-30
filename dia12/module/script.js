class CartaSearch {
    constructor() {
        this.cartaImage = document.querySelector('.carta img');
        this.inputNumber = document.querySelector('.inc');
        this.inputType = document.querySelector('.inc2');
        this.buttonYes = document.querySelector('.buttonSI');
        this.buttonNo = document.querySelector('.buttonNO');
        this.alertText = document.querySelector('.alert');
        this.buttonObtener = document.querySelector('.buttonObtener');
        this.buttonObtener.addEventListener('click', this.obtenerNuevaCarta.bind(this));

        this.mostrarCartaDefault();

        this.cartas = [];

        this.init();
    }

    mostrarCartaDefault() {
        const defaultImagen = './storage/voltea.png';
        this.mostrarCarta(defaultImagen);
    }


    init() {
        this.buttonYes.style.display = 'none';
        this.buttonNo.style.display = 'none';
    
        this.buttonYes.addEventListener('click', this.mostrarAgradecimiento.bind(this));
        this.buttonNo.addEventListener('click', this.verificarCarta.bind(this, false));
    }

    verificarCarta(esCarta) {
        const numero = this.inputNumber.value.trim();
        const tipo = this.inputType.value.trim();
        
    if (esCarta) {
        this.mostrarAgradecimiento();
    } else {
        this.obtenerNuevaCarta();
        // Mostrar los botones después de obtener una nueva carta
        this.buttonYes.style.display = 'inline-block';
        this.buttonNo.style.display = 'inline-block';
    }
}

 obtenerNuevaCarta() {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(response => response.json())
            .then(data => {
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