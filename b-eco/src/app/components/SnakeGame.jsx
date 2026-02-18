"use client";
import React, {useState, useEffect} from 'react';
import '../styles/SnakeGame.css'
// import preGameImage from '../Assets/Snake/gameIntro.jpeg';

const ROWS = 9;
const COLS = 9;

// RandomCell for food
const getRandomCell = (snake) => {
  let newFood;
  do {
    newFood = {
      row: Math.floor(Math.random() * ROWS),
      col: Math.floor(Math.random() * COLS),
      randomNumber: Math.floor(Math.random() * (9 - 0 + 1)) + 0,  
    };
  } while (snake && snake.some((cell) => cell.row === newFood.row && cell.col === newFood.col));
  return newFood;
};

// Array of image paths
const foodImages = [
  'food-cell',
  'food-cell2',
  'food-cell3',
  'food-cell4',
  'food-cell5',
  'food-cell6',
  'food-cell7',
  'food-cell8',
  'food-cell9',
  'food-cell10',
];

const SnakeGame = () => {
  const initialSnake = [{ row: 0, col: 0 }];
  const initialFood = getRandomCell(initialSnake);
  const initialDirection = 'RIGHT';
  const initialScore = 0;

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomCell());
  const [direction, setDirection] = useState('RIGHT');
  const [headImage, setHeadImage] = useState('default-head-image'); // Track the head image
  const [tailImage, setTailImage] = useState('default-tail-image'); // Track the tail image

  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // 
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function play() {
    setGameStarted(true); // Set game as started when "Play" button is clicked
    const preventScroll = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };
  
    if(!gameOver){
      window.addEventListener('keydown', preventScroll);
    }
    else {
      window.removeEventListener('keydown',preventScroll);
    }    

    // Trigger habdkeKeyPress function to set the initial direction of the snake
    handleKeyPress({key: 'ArrowRight'});
  }

  const handleKeyPress = (e) => {
    let newDirection = direction;
    let newHeadImage = headImage; // Variable to track the head image

    switch (e.key) {
        case 'ArrowUp':
          newDirection = 'UP';
          newHeadImage = 'up-head-image'; // Set head image for 'UP'
          break;
        case 'ArrowDown':
          newDirection = 'DOWN';
          newHeadImage = 'down-head-image'; // Set head image for 'DOWN'
          break;
        case 'ArrowLeft':
          newDirection = 'LEFT';
          newHeadImage = 'left-head-image'; // Set head image for 'LEFT'
          break;
        case 'ArrowRight':
          newDirection = 'RIGHT';
          newHeadImage = 'right-head-image'; // Set head image for 'RIGHT'
          break;
        default:
          break;
      }
      setDirection(newDirection);
      setHeadImage(newHeadImage); // Update the head image state
    };


  useEffect(() => {

    const handleGameTick = () => {
      if (gameOver) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0]};

      switch (direction) {
        case 'UP':
          head.row = (head.row - 1 + ROWS) % ROWS;
          break;
        case 'DOWN':
          head.row = (head.row + 1) % ROWS;
          break;
        case 'LEFT':
          head.col = (head.col - 1 + COLS) % COLS;
          break;
        case 'RIGHT':
          head.col = (head.col + 1) % COLS;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      if (head.row === food.row && head.col === food.col) {
        setScore(score + 1);
        setFood(getRandomCell(snake));
      } else {
        newSnake.pop();
      }

      if (
        newSnake.some(
          (segment, index) =>
            index !== 0 && segment.row === head.row && segment.col === head.col
        )
      ) {
        setGameOver(true);
        if(score > highestScore){
          setHighestScore(score) 
        }
      }
      setSnake(newSnake);

      if(newSnake.length > 1) {
        const tail = newSnake[newSnake.length - 1];
        const secondToLastSegment = newSnake[newSnake.length - 2];
        if(tail.row === secondToLastSegment.row){
          if (tail.col < secondToLastSegment.col){
            setTailImage('left-tail-image');
          } else {
            setTailImage('right-tail-image');
          }
        } else {
          if(tail.row < secondToLastSegment.row){
            setTailImage('up-tail-image');
          } else {
            setTailImage('down-tail-image');
          }
        }
      }

    };

    const intervalId = setInterval(handleGameTick, 300);

    return () => clearInterval(intervalId);
  }, [snake, direction, food, gameOver, score, highestScore]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);    };
  }, []);

  function restartGame() {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection(initialDirection);
    setGameOver(false);
    setScore(initialScore);
    handleKeyPress({key: 'ArrowRight'});
    document.removeEventListener('keydown', handleKeyPress);
  }

  // Function to check if a cell is the head of the snake
  const isSnakeHead = (index) => index === 0;
  const isSnakeTail = (index) => index === snake.length - 1;

  // Function to determine the Body cell orientation
  const determineOrientation = (index, snake) => {
    const currentCell = snake[index];
    const prevCell = snake[index + 1];
    const nextCell = snake[index - 1];
  
    if (!prevCell || !nextCell) {
      return ''; // If either prevCell or nextCell is undefined, no orientation needed
    }
    if (prevCell.row === nextCell.row) {
      // Horizontal movement
      return prevCell.col < nextCell.col ? 'right-body' : 'left-body';
    } else if (prevCell.col === nextCell.col){
      // Vertical movement
      return prevCell.row < nextCell.row ? 'down-body' : 'up-body';
    } else{ 
      // Corners Orientations
      if (currentCell.row === prevCell.row) {
        // Horizontal movement
        if(currentCell.col < prevCell.col){
          return nextCell.row > currentCell.row ? 'up-right-corner' : 'down-left-corner';
        } else if (currentCell.col > prevCell.col){
          return nextCell.row > currentCell.row ? 'up-left-corner' : 'down-right-corner';
        }
      } else { 
        // Vertical movement
        if(currentCell.row < prevCell.row){
          return nextCell.col > currentCell.col ? 'up-right-corner' : 'up-left-corner';
        } else if (currentCell.row > prevCell.row){
          return nextCell.col > currentCell.col ? 'down-left-corner' : 'down-right-corner';
        }
      }
    }
  };  

  return (
    <div className="gameContainer">
      {!gameStarted && ( // Display content only if game hasn't started
        <div className="pre-game-content">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FgameIntro.jpeg?alt=media&token=21e2e2a3-1dd4-4883-9a0f-f3d836421253" 
            style={{ width: '50rem', height: '50rem' }}
           />
        </div>  
      )}
      {gameStarted && (
        <div>
          <div>
            <table>
              <section className="gameBackground">
              {Array.from({ length: ROWS }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: COLS }).map((_, colIndex) => {
                    let cellClassName = '';
                    const isSnakeCell = snake.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    );
                    if(isSnakeCell) {
                        const index = snake.findIndex(
                          (cell) => cell.row === rowIndex && cell.col === colIndex
                        );
                        const isHead = isSnakeHead(index);
                        const isTail = isSnakeTail(index);
                        const isBody = !isHead && !isTail;
                        let bodyOrientationClass = '';
                        cellClassName = isHead
                          ? headImage
                          : isTail
                          ? tailImage
                          : isBody
                          ? determineOrientation(index, snake)
                          : '';
                      } else if (food.row === rowIndex && food.col === colIndex) {
                        cellClassName = foodImages[food.randomNumber];
                      }

                      return <td key={`${rowIndex}-${colIndex}`} className={cellClassName}></td>;
                    })}
                  </tr>
                ))}
              </section>
            </table>
          </div>
        </div>
      )}

      <div className="play-buttons">
        {gameStarted && !gameOver &&( // Show "Play" button only if game hasn't started
          <button className="intructions" onClick={() => { }}>
            {`Move with:`}
            <br/>
            {`⇦ ⇧ ⇨ ⇩`}
          </button>
        )}
        {!gameStarted && ( // Show "Play" button only if game hasn't started
          <button className="custom-button" onClick={() => { play() }}>
            Click me to Play!
          </button>
        )}
        {gameOver && ( // Show "Play" button only if game hasn't started
          <button className="custom-button" onClick={() => { restartGame() }}>
            GAME OVER, Let's play again!
          </button>
        )}
        <div className="score-button">
          Score: {score}
        </div>
        <div className="highestsScore-button">
          Highest Score: {highestScore}
        </div>
      </div>

    </div>
  );
};



export default SnakeGame;
