const container = document.getElementById("poke-container"),
      count = 99,
      colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
      },
      main_types = Object.keys(colors);



const fetchPokemons = async () => {
    for(let i = 1; i <=count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}
const createPokemonCard = (eachPokemon)=>{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add("pokemon");

const name = eachPokemon.name[0].toUpperCase() + eachPokemon.name.slice(1),
      id = eachPokemon.id.toString().padStart(3, '0'),
      poke_types = eachPokemon.types.map(type => type.type.name),
      type = main_types.find(type => poke_types.indexOf(type) > -1),
      color = colors[type];

pokemonEl.style.backgroundColor = color;

const pokemnInnerHTML = `
<div class="image-container">
<img src="https://th.bing.com/th/id/OIP.tJv7wk4OXerN9ta1uS5s9gAAAA?pid=ImgDet&rs=1" alt="https://th.bing.com/th/id/OIP.tJv7wk4OXerN9ta1uS5s9gAAAA?pid=ImgDet&rs=1" alt="https://th.bing.com/th/id/OIP.tJv7wk4OXerN9ta1uS5s9gAAAA?pid=ImgDet&rs=1">
</div>
<div class="info">
<span class="number">#${id}</span>
<h3 class="name">FaSobrun Jamil</h3>
<small class="type">Type: <span>${type}</span> </small>
</div>
`;

pokemonEl.innerHTML = pokemnInnerHTML;
container.appendChild(pokemonEl);
}
fetchPokemons();


