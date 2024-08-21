import './Styles.css';
import {useState, useEffect} from 'react';
import Card from './components/Card';


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listofPokemon, setPokemonList] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState();

  const selectFirstCard = (id) => {
    setFirstSelectedCard(id);
  }

  const handleCardClick = async (id) => {
    await fetchPokemonData();
    selectFirstCard(id);
    
  }

  //Populate cards compoenent array with pokemon data, shuffle it with Fisher and Yate shuffle
  const fetchPokemonData = async () => {
    const pokemonData = await getPokemon();
    for (let i = pokemonData.length - 1; i > 0; i--)
      {
        //Get a random index
        let minIndex = 0
        let maxIndex = pokemonData.length - 1
        let randomIndex = Math.floor(Math.random() * (maxIndex - minIndex) + minIndex);
        //Save the data in current iteration
        let currentIndexIteration = pokemonData[i];
        //Save the data in the swap position
        let IndexIterationToSwap = pokemonData[randomIndex];
        //Replace the data at the destination with the current iteration
        pokemonData[randomIndex] = currentIndexIteration;
        //Replace the current iteration data with the swapped data
        pokemonData[i] = IndexIterationToSwap;
      }
    setPokemonList(pokemonData);
    
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  
   useEffect(() => {
    console.log(listofPokemon);
    console.log(firstSelectedCard)
  }, [listofPokemon, firstSelectedCard]);
  
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
           return <Card 
            onClick = {() => handleCardClick(pokemon.id)} 
            key = {pokemon.id} 
            id = {pokemon.id} 
            sprites = {pokemon.sprites}/>
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
