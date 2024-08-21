import './Styles.css';
import {useState, useEffect} from 'react';
import Card from './components/Card';


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listofPokemon, setPokemonList] = useState([]);

  //Populate cards compoenent array with pokemon data 
  const fetchPokemonData = async () => {
    const pokemonData = await getPokemon();
    setPokemonList(pokemonData);
    
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  
   useEffect(() => {
    console.log(listofPokemon);
  }, [listofPokemon]);
  
  return (
    <div>
      <div>
        <p>Pokemon Memory Game</p>
        <p>Get points by clicking on an image but dont click on anymore than once !</p>
      </div>

      <div>
        Score: {score}
        <br></br>
        Best Record: {}
      </div>

      <div>
        {listofPokemon.map((pokemon) => {
           return <Card key = {pokemon.id} id = {pokemon.id} sprites = {pokemon.sprites}/>
        })}
      </div>

      <div>
        
      </div>

    </div>
  );
}

async function getPokemon() {
  //fetch a pokemon
  let pokemonList = [];
  for (let i = 1; i < 21; i++)
    {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error (`Response Status: ${response.status}`);
        }
        const pokemon = await response.json();
        //console.log(pokemon.id , pokemon["sprites"]["front_default"]);
        
        pokemonList.push({
          id : pokemon.id,
          sprites : pokemon["sprites"]["front_default"]
        })

      } catch(error) {
        console.log(error.message);
      }
    }
    return pokemonList
}


export default App;
