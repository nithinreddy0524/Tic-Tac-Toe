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
    const navigate = useNavigate();

    function play(index){
        if(turn==true){
            board[index]="O";
        }
        else{
            board[index]="X";
        }
        const win= isWinner(board,turn ? "O":"X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
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
                    <>
                        <h1 className='turn-highlight'>Winner is - {winner}</h1>
                    </>
                )
            }
            {
                !winner&&(
                    <h1 className='turn-highlight'>Current Turn : {(turn)?"O":"X"}</h1>
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