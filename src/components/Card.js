const Card = ({id, sprites}) => {

    return (
        <div>
            <p> ID: {id}</p>
            <img src = {sprites} alt={`Pokemon ${id}`}/>
            
        </div>
    );
}


export default Card;