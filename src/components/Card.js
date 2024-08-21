const Card = ({id, sprites, onClick}) => {
    

    return (
        <div>
            <span onClick = {onClick}>
                <img src = {sprites} alt={`Pokemon ${id}`}/>
                <p> ID: {id}</p>
            </span>
            
            
        </div>
    );
}


export default Card;