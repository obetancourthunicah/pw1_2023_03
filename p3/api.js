document.addEventListener('DOMContentLoaded', (e)=>{
    const listPokemon = document.getElementById('pokelist');
    getPokemonsFromApi(listPokemon);
});

function getPokemonsFromApi(listPokemon) {
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url).then(
        response => response.json()
    ).then(
        jsonResponse=>{
            console.log(jsonResponse);
            listPokemon.innerHTML='';
            jsonResponse.results.forEach(pokemon => {
                const li = document.createElement('li');
                li.innerText = pokemon.name;
                const data_url = document.createAttribute('data-url');
                data_url.value = pokemon.url;
                li.attributes.setNamedItem(data_url);
                li.addEventListener('click', (e)=>{
                    const url = e.target.dataset.url;
                    fetch(url).then(
                        response => response.json()
                    ).then(
                        jsonResponse=>{
                            console.log(jsonResponse);
                            const div = document.createElement('div');
                            div.innerHTML = `<h2>${jsonResponse.name}</h2>`;
                            const img = document.createElement('img');
                            img.src = jsonResponse.sprites.front_default;
                            div.appendChild(img);
                            document.getElementById('pokemonDetail').appendChild(div);
                        }
                    ).catch(
                        (err)=>{
                            console.log(err);
                            return null;
                        }
                    )
                });
                listPokemon.appendChild(li);
            })
        }
    ).catch(
        (err)=>{
            console.log(err);
            return null;
        }
    )
}