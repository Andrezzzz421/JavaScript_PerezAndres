    function starwars() {
        let xhr = new XMLHttpRequest()
        let starid = document.getElementById('starid').value
        let url = `https://swapi.py4e.com/api/people/${starid}`
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText)
                console.log(response)
                oneforall(response)
            } else if (this.readyState === 4) {
                console.log('Error:', this.statusText)
                document.getElementById('personstar').innerHTML = 'Error fetching:' + this.statusText
            }
        }
        xhr.send()
    }

    function oneforall(data) {
        let dataInfo = '<h2>' + data.name + '</h2>';
        dataInfo += '<p><strong>height:</strong> ' + data.height + '</p>';
        dataInfo += '<p><strong>mass:</strong> ' + data.mass + '</p>'
        dataInfo += '<p><strong>hair color:</strong> ' + data.hair_color + '</p>'
        dataInfo += '<p><strong>skin color:</strong> ' + data.skin_color + '</p>'
        dataInfo += '<p><strong>eye color:</strong> ' + data.eye_color + '</p>'
        dataInfo += '<p><strong>birth year:</strong> ' + data.birth_year + '</p>'
        dataInfo += '<p><strong>gender:</strong> ' + data.gender + '</p>'
        dataInfo += '<p><strong>created:</strong> ' + data.created + '</p>'
        dataInfo += '<p><strong>homeworld:</strong>' + '</p>';
        fetch(data.homeworld)
           .then(response => response.json())
           .then(homeworldData => {
                dataInfo += `<p><strong>Name:</strong> ${homeworldData.name}</p>`;
                dataInfo += `<p><strong>Rotation Period:</strong> ${homeworldData.rotation_period}</p>`;
                dataInfo += `<p><strong>Orbital Period:</strong> ${homeworldData.orbital_period}</p>`;
                dataInfo += `<p><strong>Diameter:</strong> ${homeworldData.diameter}</p>`;
                dataInfo += `<p><strong>Climate:</strong> ${homeworldData.climate}</p>`;
                dataInfo += `<p><strong>Gravity:</strong> ${homeworldData.gravity}</p>`;
                dataInfo += `<p><strong>Terrain:</strong> ${homeworldData.terrain}</p>`;
                dataInfo += `<p><strong>Surface Water:</strong> ${homeworldData.surface_water}</p>`;
                dataInfo += `<p><strong>Population:</strong> ${homeworldData.population}</p>`;
                if (homeworldData.residents) {
                    dataInfo += `<p><strong>Residents:</strong></p>`;
                    homeworldData.residents.forEach(residents => {
                        dataInfo += `<p>${residents}</p>`;
                    })
                }
                if (homeworldData.films.length) {
                    dataInfo += `<p><strong>Films:</strong></p>`;
                    homeworldData.films.forEach(film => {
                        dataInfo += `<p>${film}</p>`;
                    });
                }
                dataInfo += `<p><strong>Created:</strong> ${homeworldData.created}</p>`;
                dataInfo += `<p><strong>Edited:</strong> ${homeworldData.edited}</p>`;
                dataInfo += `<p><strong>URL:</strong> ${homeworldData.url}</p>`;
                dataInfo += '<p><strong>films:</strong></p>';
                dataInfo += '<ul>';
                let filmPromises = data.films.map(filmLink => {
                    return fetch(filmLink)
                       .then(response => response.json())
                       .then(filmData => {
                            dataInfo += '<li>' + filmData.title + ' (' + filmData.release_date + ')</li>';
                            dataInfo += `<p><strong>episode_id:</strong> ${filmData.episode_id}</p>`;
                            dataInfo += `<p><strong>opening_crawl:</strong> ${filmData.opening_crawl}</p>`;
                            dataInfo += `<p><strong>director:</strong> ${filmData.director}</p>`;
                            dataInfo += `<p><strong>producer:</strong> ${filmData.producer}</p>`;
                            if (filmData.characters) {
                                dataInfo += `<p><strong>characters:</strong></p>`;
                                filmData.characters.forEach(characters => {
                                    dataInfo += `<p>${characters}</p>`;
                                })
                            }
                            if (filmData.planets) {
                                dataInfo += `<p><strong>planets:</strong></p>`;
                                filmData.planets.forEach(planets => {
                                    dataInfo += `<p>${planets}</p>`;
                                })
                            }
                            dataInfo += `<p><strong>starships:</strong></p>`;
                            filmData.starships.forEach(starships => {
                                dataInfo += `<p>${starships}</p>`;
                            })
                            dataInfo += `<p><strong>vehicles:</strong></p>`;
                            filmData.vehicles.forEach(vehicles => {
                                dataInfo += `<p>${vehicles}</p>`;
                            })
                            dataInfo += `<p><strong>species:</strong></p>`;
                            filmData.species.forEach(species => {
                                dataInfo += `<p>${species}</p>`;
                            })
                            dataInfo += `<p><strong>created:</strong> ${filmData.created}</p>`;
                            dataInfo += `<p><strong>edited:</strong> ${filmData.edited}</p>`;
                            dataInfo += `<p><strong>url:</strong> ${filmData.url}</p>`;
                       })
                       .catch(error => {
                            console.error('Error fetching film:', error);
                            dataInfo += '<li>Error fetching film</li>';
                       });
                });
    
                Promise.all(filmPromises)
                    .then(() => {
                        dataInfo += '</ul>';
                        fetch(data.species)
                        .then(response => response.json())
                        .then(speciesData => {
                            dataInfo += '<p><strong>species:</strong>' + '</p>';
                             dataInfo += `<p><strong>Name:</strong> ${speciesData.name}</p>`;
                             dataInfo += `<p><strong>classification:</strong> ${speciesData.classification}</p>`;
                             dataInfo += `<p><strong>designation:</strong> ${speciesData.designation}</p>`;
                             dataInfo += `<p><strong>average height:</strong> ${speciesData.average_height}</p>`;
                             dataInfo += `<p><strong>skin colors:</strong> ${speciesData.skin_colors}</p>`;
                             dataInfo += `<p><strong>hair colors:</strong> ${speciesData.hair_colors}</p>`;
                             dataInfo += `<p><strong>eye colors:</strong> ${speciesData.eye_colors}</p>`;
                             dataInfo += `<p><strong>average lifespan:</strong> ${speciesData.average_lifespan}</p>`;
                             dataInfo += `<p><strong>homeworld:</strong> ${speciesData.homeworld}</p>`;
                             dataInfo += `<p><strong>language:</strong> ${speciesData.language}</p>`;
                     
                             if (speciesData.people) {
                                 dataInfo += `<p><strong>people:</strong></p>`;
                                 speciesData.people.forEach(people => {
                                     dataInfo += `<p>${people}</p>`;
                                 })
                             }
                             if (speciesData.films.length) {
                                 dataInfo += `<p><strong>Films:</strong></p>`;
                                 speciesData.films.forEach(film => {
                                     dataInfo += `<p>${film}</p>`;
                                 });
                             }
                             dataInfo += `<p><strong>Created:</strong> ${speciesData.created}</p>`;
                             dataInfo += `<p><strong>Edited:</strong> ${speciesData.edited}</p>`;
                             dataInfo += `<p><strong>URL:</strong> ${speciesData.url}</p>`;
                         })
                        .catch(error => {
                             console.error('Error fetching species:', error);
                             dataInfo += '<p><strong>species:</strong> Error fetching species</p>';
                         });
                    })
                    .catch(error => {
                        console.error('Error fetching films:', error);
                        dataInfo += '<p><strong>Films:</strong> Error fetching films</p>';
                    });
    
                dataInfo += '<p><strong>vehicles:</strong></p>';
                data.vehicles.forEach(vehicleLink => {
                    fetch(vehicleLink)
                        .then(response => response.json())
                        .then(vehicleData => {
                            dataInfo += `<p><strong>Name:</strong> ${vehicleData.name}</p>`;
                            dataInfo += `<p><strong>model:</strong> ${vehicleData.model}</p>`;
                            dataInfo += `<p><strong>manufacturer:</strong> ${vehicleData.manufacturer}</p>`;
                            dataInfo += `<p><strong>cost in credits:</strong> ${vehicleData.cost_in_credits}</p>`;
                            dataInfo += `<p><strong>skin length:</strong> ${vehicleData.length}</p>`;
                            dataInfo += `<p><strong>max atmosphering speed:</strong> ${vehicleData.max_atmosphering_speed}</p>`;
                            dataInfo += `<p><strong>crew:</strong> ${vehicleData.crew}</p>`;
                            dataInfo += `<p><strong>passengers:</strong> ${vehicleData.passengers}</p>`;
                            dataInfo += `<p><strong>cargo capacity:</strong> ${vehicleData.cargo_capacity}</p>`;
                            dataInfo += `<p><strong>consumables:</strong> ${vehicleData.consumables}</p>`;
                            dataInfo += `<p><strong>vehicle class:</strong> ${vehicleData.vehicle_class}</p>`;
    
                            if (vehicleData.pilots) {
                                dataInfo += `<p><strong>pilots:</strong></p>`;
                                vehicleData.pilots.forEach(pilot => {
                                    dataInfo += `<p>${pilot}</p>`;
                                })
                            }
                            if (vehicleData.films.length) {
                                dataInfo += `<p><strong>Films:</strong></p>`;
                                vehicleData.films.forEach(film => {
                                    dataInfo += `<p>${film}</p>`;
                                });
                            }
                            dataInfo += `<p><strong>Created:</strong> ${vehicleData.created}</p>`;
                            dataInfo += `<p><strong>Edited:</strong> ${vehicleData.edited}</p>`;
                            dataInfo += `<p><strong>URL:</strong> ${vehicleData.url}</p>`;
                            document.getElementById('personstar').innerHTML = dataInfo;
                        })
                        .catch(error => {
                            console.error('Error fetching vehicle:', error);
                            dataInfo += '<p>Error fetching vehicle</p>';
                        });
                });
                data.starships.forEach(starshipsLink => {
                    fetch(starshipsLink)
                        .then(response => response.json())
                        .then(starshipsData => {
                            dataInfo += `<p><strong>Name:</strong> ${starshipsData.name}</p>`;
                            dataInfo += `<p><strong>model:</strong> ${starshipsData.model}</p>`;
                            dataInfo += `<p><strong>manufacturer:</strong> ${starshipsData.manufacturer}</p>`;
                            dataInfo += `<p><strong>cost in credits:</strong> ${starshipsData.cost_in_credits}</p>`;
                            dataInfo += `<p><strong>length:</strong> ${starshipsData.length}</p>`;
                            dataInfo += `<p><strong>max atmosphering speed:</strong> ${starshipsData.max_atmosphering_speed}</p>`;
                            dataInfo += `<p><strong>crew:</strong> ${starshipsData.crew}</p>`;
                            dataInfo += `<p><strong>passengers:</strong> ${starshipsData.passengers}</p>`;
                            dataInfo += `<p><strong>cargo capacity:</strong> ${starshipsData.cargo_capacity}</p>`;
                            dataInfo += `<p><strong>consumables:</strong> ${starshipsData.consumables}</p>`;
                            dataInfo += `<p><strong>hyperdrive rating:</strong> ${starshipsData.hyperdrive_rating}</p>`;
                            dataInfo += `<p><strong>MGLT:</strong> ${starshipsData.MGLT}</p>`;
                            dataInfo += `<p><strong>starship class:</strong> ${starshipsData.starship_class}</p>`;
                            if (starshipsData.pilots) {
                                dataInfo += `<p><strong>pilots:</strong></p>`;
                                starshipsData.pilots.forEach(pilot => {
                                    dataInfo += `<p>${pilot}</p>`;
                                })
                            }
                            if (starshipsData.films.length) {
                                dataInfo += `<p><strong>Films:</strong></p>`;
                                starshipsData.films.forEach(film => {
                                    dataInfo += `<p>${film}</p>`;
                                });
                            }
                            dataInfo += `<p><strong>Created:</strong> ${starshipsData.created}</p>`;
                            dataInfo += `<p><strong>Edited:</strong> ${starshipsData.edited}</p>`;
                            dataInfo += `<p><strong>URL:</strong> ${starshipsData.url}</p>`;
                            document.getElementById('personstar').innerHTML = dataInfo;
                        })
                        .catch(error => {
                            console.error('Error fetching vehicle:', error);
                            dataInfo += '<p>Error fetching vehicle</p>';
                        });
                });
            })
            .catch(error => {
                console.error('Error fetching homeworld:', error);
                dataInfo += '<p><strong>homeworld:</strong> Error fetching homeworld</p>';
            });
    
        document.getElementById('personstar').innerHTML = dataInfo;
    }
    
    
