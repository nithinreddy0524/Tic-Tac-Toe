import { useNavigate } from "react-router-dom";
import image from "../assets/images.png"
import "./Instructions.css"

function Instructions() {
    const navigate=useNavigate();

    return(
        <>
            <div className='grid-wrapper'>
                <div onClick={()=>navigate("/")} className='header'>
                    <img className='image' src={image} alt="tic-tac-toe" />
                    <p>Tic-Tac-Toe</p>
                </div>

                <div class="instructions">
                    <h1>Instructions</h1>
                    <p><strong>Objective:</strong></p>
                    <ul>
                        <li>Tic Tac Toe is a classic 2-player game where the goal is to get three of your marks (either "Lion" or "Tiger") in a row, either horizontally, vertically, or diagonally, on a 3x3 grid.</li>
                    </ul>
                    <p><strong>How to Play:</strong></p>
                    <ul>
                    <li><strong>Two Players:</strong> The game is played by two players. One player will use "Lion" and the other will use "Tiger".</li>
                    <li><strong>Game Setup:</strong> The game board consists of a 3x3 grid. Players take turns to place their marks ("Lion" or "Tiger") in an empty cell on the grid.</li>
                    <li><strong>Taking Turns:</strong>
                        <ul>
                        <li>Player 1 uses "Lion" and Player 2 uses "Tiger".</li>
                        <li>Players take turns clicking on an empty square to place their mark.</li>
                        </ul>
                    </li>
                    <li><strong>Winning the Game:</strong> The first player to align three of their marks in a row (horizontally, vertically, or diagonally) wins the game.</li>
                    <li><strong>Draw:</strong> If all cells are filled and there is no winner, the game is a draw.</li>
                    <li><strong>Starting the Game:</strong> Click on an empty cell to place your mark and start playing!</li>
                    </ul>

                    <br />
                    <p><strong>Tips:</strong></p>
                    <ul>
                    <li>Try to block your opponent from creating a line of three marks while making your own line.</li>
                    <li>The center square is a strategic position; try to claim it early!</li>
                    </ul>
                </div>
               
                <div className='footer'>
                    <p>© 2024 Tic-Tac-Toe App. All Rights Reserved.</p>
                    <p>Developed by Nithin Reddy</p>
                </div>
            </div>
            <div className="btn">
                <button onClick={()=>navigate("/")}>Let's Play</button>
            </div>
        </>
    )
}

export default Instructions;