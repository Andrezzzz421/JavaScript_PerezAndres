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
        let dataInfo = '';

        // Function to create table rows
        function createTableRow(label, value) {
            return '<tr><td><strong>' + label + '</strong></td><td>' + value + '</td></tr>';
        }

        // Displaying Person Information
        dataInfo += '<h2>' + data.name + '</h2>';
        dataInfo += '<table>';
        dataInfo += '<tr><th colspan="2">Person Information</th></tr>';
        dataInfo += createTableRow('Height', data.height);
        dataInfo += createTableRow('Mass', data.mass);
        dataInfo += createTableRow('Hair Color', data.hair_color);
        dataInfo += createTableRow('Skin Color', data.skin_color);
        dataInfo += createTableRow('Eye Color', data.eye_color);
        dataInfo += createTableRow('Birth Year', data.birth_year);
        dataInfo += createTableRow('Gender', data.gender);
        dataInfo += createTableRow('Created', data.created);
        dataInfo += createTableRow('Homeworld', data.homeworld);
        dataInfo += '</table>';

        // Fetching and displaying Homeworld Information
        fetch(data.homeworld)
            .then(response => response.json())
            .then(homeworldData => {
                dataInfo += '<table>';
                dataInfo += '<tr><th colspan="2">Homeworld Information</th></tr>';
                dataInfo += createTableRow('Name', homeworldData.name);
                dataInfo += createTableRow('Rotation Period', homeworldData.rotation_period);
                dataInfo += createTableRow('Orbital Period', homeworldData.orbital_period);
                dataInfo += createTableRow('Diameter', homeworldData.diameter);
                dataInfo += createTableRow('Climate', homeworldData.climate);
                dataInfo += createTableRow('Gravity', homeworldData.gravity);
                dataInfo += createTableRow('Terrain', homeworldData.terrain);
                dataInfo += createTableRow('Surface Water', homeworldData.surface_water);
                dataInfo += createTableRow('Population', homeworldData.population);
                dataInfo += '</table>';

                // Fetching and displaying Species Information
                fetch(data.species)
                    .then(response => response.json())
                    .then(speciesData => {
                        dataInfo += '<table>';
                        dataInfo += '<tr><th colspan="2">Species Information</th></tr>';
                        dataInfo += createTableRow('Name', speciesData.name);
                        dataInfo += createTableRow('Classification', speciesData.classification);
                        dataInfo += createTableRow('Designation', speciesData.designation);
                        dataInfo += createTableRow('Average Height', speciesData.average_height);
                        dataInfo += createTableRow('Skin Colors', speciesData.skin_colors);
                        dataInfo += createTableRow('Hair Colors', speciesData.hair_colors);
                        dataInfo += createTableRow('Eye Colors', speciesData.eye_colors);
                        dataInfo += createTableRow('Average Lifespan', speciesData.average_lifespan);
                        dataInfo += createTableRow('Homeworld', speciesData.homeworld);
                        dataInfo += createTableRow('Language', speciesData.language);
                        if (speciesData.people) {
                            dataInfo += '<tr><td colspan="2"><strong>People</strong></td></tr>';
                            speciesData.people.forEach(people => {
                                dataInfo += '<tr><td colspan="2">' + people + '</td></tr>';
                            });
                        }
                        if (speciesData.films.length) {
                            dataInfo += '<tr><td colspan="2"><strong>Films</strong></td></tr>';
                            speciesData.films.forEach(film => {
                                dataInfo += '<tr><td colspan="2">' + film + '</td></tr>';
                            });
                        }
                        dataInfo += createTableRow('Created', speciesData.created);
                        dataInfo += createTableRow('Edited', speciesData.edited);
                        dataInfo += createTableRow('URL', speciesData.url);
                        dataInfo += '</table>';

                        // Fetching and displaying Films Information
                        Promise.all(data.films.map(filmLink => fetch(filmLink).then(response => response.json())))
                            .then(filmsData => {
                                dataInfo += '<table>';
                                dataInfo += '<tr><th colspan="2">Films Information</th></tr>';
                                filmsData.forEach(filmData => {
                                    dataInfo += createTableRow('Title', filmData.title);
                                    dataInfo += createTableRow('Release Date', filmData.release_date);
                                    dataInfo += createTableRow('Episode ID', filmData.episode_id);
                                    dataInfo += createTableRow('Opening Crawl', filmData.opening_crawl);
                                    dataInfo += createTableRow('Director', filmData.director);
                                    dataInfo += createTableRow('Producer', filmData.producer);
                                    if (filmData.characters) {
                                        dataInfo += '<tr><td colspan="2"><strong>Characters</strong></td></tr>';
                                        filmData.characters.forEach(character => {
                                            dataInfo += '<tr><td colspan="2">' + character + '</td></tr>';
                                        });
                                    }
                                    if (filmData.planets) {
                                        dataInfo += '<tr><td colspan="2"><strong>Planets</strong></td></tr>';
                                        filmData.planets.forEach(planet => {
                                            dataInfo += '<tr><td colspan="2">' + planet + '</td></tr>';
                                        });
                                    }
                                    dataInfo += createTableRow('Created', filmData.created);
                                    dataInfo += createTableRow('Edited', filmData.edited);
                                    dataInfo += createTableRow('URL', filmData.url);
                                });
                                dataInfo += '</table>';

                                // Fetching and displaying Vehicles Information
                                Promise.all(data.vehicles.map(vehicleLink => fetch(vehicleLink).then(response => response.json())))
                                    .then(vehiclesData => {
                                        dataInfo += '<table>';
                                        dataInfo += '<tr><th colspan="2">Vehicles Information</th></tr>';
                                        vehiclesData.forEach(vehicleData => {
                                            dataInfo += createTableRow('Name', vehicleData.name);
                                            dataInfo += createTableRow('Model', vehicleData.model);
                                            dataInfo += createTableRow('Manufacturer', vehicleData.manufacturer);
                                            dataInfo += createTableRow('Cost in Credits', vehicleData.cost_in_credits);
                                            dataInfo += createTableRow('Length', vehicleData.length);
                                            dataInfo += createTableRow('Max Atmosphering Speed', vehicleData.max_atmosphering_speed);
                                            dataInfo += createTableRow('Crew', vehicleData.crew);
                                            dataInfo += createTableRow('Passengers', vehicleData.passengers);
                                            dataInfo += createTableRow('Cargo Capacity', vehicleData.cargo_capacity);
                                            dataInfo += createTableRow('Consumables', vehicleData.consumables);
                                            dataInfo += createTableRow('Vehicle Class', vehicleData.vehicle_class);
                                            if (vehicleData.pilots) {
                                                dataInfo += '<tr><td colspan="2"><strong>Pilots</strong></td></tr>';
                                                vehicleData.pilots.forEach(pilot => {
                                                    dataInfo += '<tr><td colspan="2">' + pilot + '</td></tr>';
                                                });
                                            }
                                            if (vehicleData.films.length) {
                                                dataInfo += '<tr><td colspan="2"><strong>Films</strong></td></tr>';
                                                vehicleData.films.forEach(film => {
                                                    dataInfo += '<tr><td colspan="2">' + film + '</td></tr>';
                                                });
                                            }
                                            dataInfo += createTableRow('Created', vehicleData.created);
                                            dataInfo += createTableRow('Edited', vehicleData.edited);
                                            dataInfo += createTableRow('URL', vehicleData.url);
                                        });
                                        dataInfo += '</table>';

                                        // Fetching and displaying Starships Information
                                        Promise.all(data.starships.map(starshipLink => fetch(starshipLink).then(response => response.json())))
                                            .then(starshipsData => {
                                                dataInfo += '<table>';
                                                dataInfo += '<tr><th colspan="2">Starships Information</th></tr>';
                                                starshipsData.forEach(starshipData => {
                                                    dataInfo += createTableRow('Name', starshipData.name);
                                                    dataInfo += createTableRow('Model', starshipData.model);
                                                    dataInfo += createTableRow('Manufacturer', starshipData.manufacturer);
                                                    dataInfo += createTableRow('Cost in Credits', starshipData.cost_in_credits);
                                                    dataInfo += createTableRow('Length', starshipData.length);
                                                    dataInfo += createTableRow('Max Atmosphering Speed', starshipData.max_atmosphering_speed);
                                                    dataInfo += createTableRow('Crew', starshipData.crew);
                                                    dataInfo += createTableRow('Passengers', starshipData.passengers);
                                                    dataInfo += createTableRow('Cargo Capacity', starshipData.cargo_capacity);
                                                    dataInfo += createTableRow('Consumables', starshipData.consumables);
                                                    dataInfo += createTableRow('Hyperdrive Rating', starshipData.hyperdrive_rating);
                                                    dataInfo += createTableRow('MGLT', starshipData.MGLT);
                                                    dataInfo += createTableRow('Starship Class', starshipData.starship_class);
                                                    if (starshipData.pilots) {
                                                        dataInfo += '<tr><td colspan="2"><strong>Pilots</strong></td></tr>';
                                                        starshipData.pilots.forEach(pilot => {
                                                            dataInfo += '<tr><td colspan="2">' + pilot + '</td></tr>';
                                                        });
                                                    }
                                                    if (starshipData.films.length) {
                                                        dataInfo += '<tr><td colspan="2"><strong>Films</strong></td></tr>';
                                                        starshipData.films.forEach(film => {
                                                            dataInfo += '<tr><td colspan="2">' + film + '</td></tr>';
                                                        });
                                                    }
                                                    dataInfo += createTableRow('Created', starshipData.created);
                                                    dataInfo += createTableRow('Edited', starshipData.edited);
                                                    dataInfo += createTableRow('URL', starshipData.url);
                                                });
                                                dataInfo += '</table>';
                                                
                                                // Displaying all information
                                                document.getElementById('personstar').innerHTML = dataInfo;
                                            });
                                    });
                            });
                    });
            });

    }
    
    
