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
    let dataInfo = ``;
    dataInfo += `<img src="${data.picture.large}" id="cosa2"><br><br>`;
    dataInfo += `<p id="cosa1">${data.name.first} ${data.name.last}</p>`;
    dataInfo += `<p id="cosa3"><strong>Email:</strong> ${data.email}</p>`;
    dataInfo += `<p id="cosa4"><strong>Birthday:</strong> ${data.dob.date}</p>`;
    dataInfo += `<p id="cosa5"><strong>address:</strong> ${data.location.postcode} ${data.location.country}</p>`;
    dataInfo += `<p id="cosa6"><strong>phone:</strong> ${data.phone}</p>`;
    dataInfo += `<p id="cosa7"><strong>password:</strong> ${data.login.password}</p>`;
    document.getElementById('cosita').innerHTML = dataInfo; 

}
window.onload = personrandom;