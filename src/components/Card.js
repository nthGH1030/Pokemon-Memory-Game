const Card = ({id, sprites}) => {

    return (
        <div>
            <span>
                <img src = {sprites} alt={`Pokemon ${id}`}/>
                <p> ID: {id}</p>
            </span>
            
            
        </div>
    );
}


export default Card;