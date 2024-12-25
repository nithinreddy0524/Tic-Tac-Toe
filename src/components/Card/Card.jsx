import Icon from "../Icon/Icon";
import './Card.css';
function Card({gameEnd,player,onPlay,index}){
    let icon=<Icon/>
    if(player=="Tiger"){
        icon=<Icon name="cross"/>
    }
    else if(player=="Lion"){
        icon=<Icon name="circle"/>
    }
    return(
        <div className="card1" onClick={()=>!gameEnd && player=='' && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;