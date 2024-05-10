class PERSONARANDOM extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <img src="" alt="Persona" id="persona-img" class="cosa2">
        <div>
            <img src="./storage/hombre.png" alt="" class="img1" id="nombre">
            <img src="./storage/carta.png" alt="" class="img1" id="email">
            <img src="./storage/calendar-days.png" alt="" class="img1" id="birthday">
            <img src="./storage/mapa.png" alt="" class="img1" id="location">
            <img src="./storage/llamar.png" alt="" class="img1" id="phone">
            <img src="./storage/candado.png" alt="" class="img1" id="password">
        </div>
        <div id="cosita" class="coson"></div>
        `;
    }
    
}   

customElements.define('persona-5', PERSONARANDOM);

class NewButton extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const button = document.createElement('button');
        button.textContent = 'New';
        button.classList.add('botonsito');
        button.addEventListener('click', this.onClick.bind(this));
        this.appendChild(button);
    }

    onClick() {
        personrandom()
    }

}

// Definir el elemento personalizado
customElements.define('new-button', NewButton);

function personrandom() {
    let xhr = new XMLHttpRequest();
    let url = 'https://randomuser.me/api/?results=1';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            personrd(response.results[0]); 
            console.log(response);
        } else if (this.readyState === 4) {
            console.log('Error:', this.statusText);
        }
    };
    xhr.send();
}

function personrd(data) {
    document.getElementById('persona-img').src = data.picture.large;

    let defaultInfo = `<p id="texto1">Hi, my name is</p>`;
    defaultInfo += `<p>${data.name.first} ${data.name.last}</p>`;
    document.getElementById('cosita').innerHTML = defaultInfo;

    let nombreImg = document.getElementById('nombre');
    nombreImg.addEventListener('mouseover', function() {
        let nombreInfo = `<p id="texto1">Hi, my name is</p>`;
        nombreInfo += `<p>${data.name.first} ${data.name.last}</p>`;
        document.getElementById('cosita').innerHTML = nombreInfo;
    });

    let emailImg = document.getElementById('email');
    emailImg.addEventListener('mouseover', function() {
        let emailInfo = `<p id="texto1">My email address is</p>`;
        emailInfo += `<p>${data.email}</p>`;
        document.getElementById('cosita').innerHTML = emailInfo;
    });

    let birthdayImg = document.getElementById('birthday');
    birthdayImg.addEventListener('mouseover', function() {
        let formattedBirthday = formatDate(data.dob.date);
        let birthdayInfo = `<p id="texto1">My birthday is</p>`;
        birthdayInfo += `<p>${formattedBirthday}</p>`;
        document.getElementById('cosita').innerHTML = birthdayInfo;
    });

    let locationImg = document.getElementById('location');
    locationImg.addEventListener('mouseover', function() {
        let locationInfo = `<p id="texto1">My address is</p>`;
        locationInfo += `<p>${data.location.postcode} ${data.location.country}</p>`;
        document.getElementById('cosita').innerHTML = locationInfo;
    });

    let phoneImg = document.getElementById('phone');
    phoneImg.addEventListener('mouseover', function() {
        let phoneInfo = `<p id="texto1">My phone number is</p>`;
        phoneInfo += `<p>${data.phone}</p>`;
        document.getElementById('cosita').innerHTML = phoneInfo;
    });

    let passwordImg = document.getElementById('password');
    passwordImg.addEventListener('mouseover', function() {
        let passwordInfo = `<p id="texto1">My password is</p>`;
        passwordInfo += `<p>${data.login.password}</p>`;
        document.getElementById('cosita').innerHTML = passwordInfo;
    });
}

function formatDate(dateString) {
    let birthday = new Date(dateString);
    let day = birthday.getDate();
    let month = birthday.getMonth() + 1;
    let year = birthday.getFullYear();
    return `${day}/${month}/${year}`;
}


window.onload = personrandom;
    