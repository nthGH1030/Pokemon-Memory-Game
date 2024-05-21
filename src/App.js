import './Styles.css';
import {useState} from 'react'


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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

    </div>
  );
}

function Card() {
  //Fetch random pokemon types from pokedex API, put them into an object

  return (
    <div>

    </div>
  )
}

export default App;
