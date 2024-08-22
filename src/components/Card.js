const Card = ({id, sprites, onClick}) => {
    

    return (
        <div className = "rounded border-2 bg-transparent">
            <div
                className = "bg-slate-200 "
                onClick = {onClick}>
                <img src = {sprites} alt={`Pokemon ${id}`}/>
            </div>
            <p className = "bg-slate-200 "> 
                ID: {id}
            </p>
            
        </div>
    );
}


export default Card;