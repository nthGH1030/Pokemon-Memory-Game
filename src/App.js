import './Styles.css';
import {useState, useEffect} from 'react';
import Card from './components/Card';


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listofPokemon, setPokemonList] = useState([]);

  const pokemon = getPokemon(1);
  

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
        
      </div>

      <div>
        
      </div>

    </div>
  );
}

async function getPokemon(id) {
  //fetch a pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error (`Response Status: ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch(error) {
    console.log(error.message);
  }
  
}


export default App;
