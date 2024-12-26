import { useState } from 'react';
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner"
import image from "../../assets/images.png"
import Instructions from '../../Instructions/Instructions';
import { useNavigate } from 'react-router-dom';

function Grid({ numberOfCards }){
    const [board,setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn]=useState(true)//true=>O false=>X
    const [winner,setWinner]=useState(null);
    const [status,setStatus]=useState(false);
    const navigate = useNavigate();

    function play(index){
        if(turn==true){
            board[index]="Lion";
        }
        else{
            board[index]="Tiger";
        }
        const win= isWinner(board,turn ? "Lion":"Tiger");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
        if(isArrayFull(board)){
            setStatus(true);
        }
    }

    function isArrayFull(board) {
        const nonNullArr = board.filter(element => element !== "");
        return nonNullArr.length === 9;
    }

    function reset(){
        setStatus(false);
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }
    
    return(
        <div className='grid-wrapper'>
            <div onClick={()=>navigate("/")} className='header'>
                <img className='image' src={image} alt="tic-tac-toe" />
                <p>Tic-Tac-Toe</p>
            </div>
            {
                winner && (
                    <div className='turn-highlight2'>
                        <span> Congratulations, {winner} </span><span>You won the game!</span>
                    </div>
                )
            }
            {
                !status && !winner&&(
                    <h1 className='turn-highlight'>Current Turn : {(turn)?"Lion":"Tiger"}</h1>
                )
            }
            {
                status && !winner && (
                    <h1 className='turn-highlight3'> It's a Draw! </h1>
                )
            }
            <div className="grid1">
                {board.map((el,idx)=><Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx}/>)}
            </div>

            {
                <div className='btns'>
                    <button className='reset' onClick={reset}>Reset Game</button>
                    <button className='reset' onClick={()=>navigate("/instructions")}>Instructions</button>
                </div>
            }

            <div className='footer'>
                <p>© 2024 Tic-Tac-Toe App. All Rights Reserved.</p>
                <p>Developed by Nithin Reddy</p>
            </div>
        </div>
    );
}

export default Grid;