const Card = (props) => {

    return (
        <div>
            <p> ID: {props.pokemon.id}</p>
            <img src = {props.pokemon.sprites} alt={`Pokemon ${props.pokemon.id}`}/>
            
        </div>
    );
}


export default Card;