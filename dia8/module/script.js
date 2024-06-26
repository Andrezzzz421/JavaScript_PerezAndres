function starwars(){
    let xhr = new XMLHttpRequest()
    let starid = document.getElementById('starid').value
    let url = `https://swapi.py4e.com/api/people/${starid}`
    xhr.open('GET',url,true)
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status ===200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            oneforall(response)
        }else if (this.readyState ===4){
            console.log('Error:', this.statusText)
            document.getElementById('personstar').innerHTML = 'Error fetching:'+ this.statusText
        }
    }
    xhr.send()
}

function oneforall(data) {
    let dataInfo = '<h2>' + data.name + '</h2>';

    dataInfo += '<p><strong>height:</strong> ' + data.height+ '</p>';
    dataInfo += '<p><strong>mass:</strong> ' + data.mass+ '</p>'
    dataInfo += '<p><strong>hair color:</strong> ' + data.hair_color+ '</p>'
    dataInfo += '<p><strong>skin color:</strong> ' + data.skin_color  + '</p>'
    dataInfo += '<p><strong>eye color:</strong> ' + data.eye_color+ '</p>'
    dataInfo += '<p><strong>birth year:</strong> ' + data.birth_year+ '</p>'
    dataInfo += '<p><strong>gender:</strong> ' + data.gender+ '</p>'
    dataInfo += '<p><strong>homeworld:</strong>' + '</p>';
    fetch(data.homeworld)
        .then(response => response.json())
        .then(homeworldData => {
            dataInfo += '<p><strong>homeworld:</strong> ' + homeworldData.name + '</p>';
            dataInfo += '<p><strong>films:</strong></p>';
            dataInfo += '<ul>';
            let filmPromises = data.films.map(filmLink => {
                return fetch(filmLink)
                    .then(response => response.json())
                    .then(filmData => {
                        dataInfo += '<li>' + filmData.title + ' (' + filmData.release_date + ')</li>';
                    })
                    .catch(error => {
                        console.error('Error fetching film:', error);
                        dataInfo += '<li>Error fetching film</li>';
                    });
            });

            Promise.all(filmPromises)
                .then(() => {
                    dataInfo += '</ul>';
                    document.getElementById('personstar').innerHTML = dataInfo;
                });
        })
        .catch(error => {
            console.error('Error fetching homeworld:', error);
            dataInfo += '<p><strong>homeworld:</strong> Error fetching homeworld</p>';

            dataInfo += '<p><strong>films:</strong></p>';
            dataInfo += '<ul>';
            data.films.forEach(filmLink => {
                dataInfo += '<li>Error fetching film</li>';
            });
            dataInfo += '</ul>';

            document.getElementById('personstar').innerHTML = dataInfo;
        });
}
