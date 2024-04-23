function fetchsuperhero() {
    let xhr = new XMLHttpRequest();
    let heroid = document.getElementById('heroid').value;
    let apikey = "1208ec84e169943abe18ec51f1f709ee";
    let url = `https://superheroapi.com/api.php/${apikey}/${heroid}`;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            console.log(response)
            displayHero(response);
        } else if (this.readyState === 4) {
            console.log('Error:', this.statusText);
            document.getElementById('superheroinfo').innerHTML = 'Error fetching data: ' + this.statusText;
        }
    };
    xhr.send();
}

function displayHero(hero) {
    let heroInfo = '<h2>' + hero.name + '</h2>';

    if (hero.image && hero.image.url) {
        heroInfo += '<img src="' + hero.image.url + '" alt="Image of ' + hero.name + '" style="width:100px;">';
    }

    heroInfo += '<p><strong>Full Name:</strong> ' + hero.biography['full-name'] + '</p>';
    heroInfo += '<p><strong>Publisher:</strong> ' + hero.biography.publisher + '</p>';
    heroInfo += '<p><strong>First Appearance:</strong> ' + hero.biography['first-appearance'] + '</p>';
    heroInfo += '<p><strong>Powerstats:</strong> </p>';
    heroInfo += '<ul>';
    heroInfo += '<li>Intelligence: ' + hero.powerstats.intelligence + '</li>';
    heroInfo += '<li>Strength: ' + hero.powerstats.strength + '</li>';
    heroInfo += '<li>Speed: ' + hero.powerstats.speed + '</li>';
    heroInfo += '<li>Durability: ' + hero.powerstats.durability + '</li>';
    heroInfo += '<li>Power: ' + hero.powerstats.power + '</li>';
    heroInfo += '<li>Combat: ' + hero.powerstats.combat + '</li>';
    heroInfo += '</ul>';


    document.getElementById('superheroinfo').innerHTML = heroInfo;
}
