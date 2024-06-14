import React, { useState, useEffect } from 'react';
import './art.css';
import Flag1 from "./image/Flag1.png";
import SoundPlayer3 from './SoundPlayer3';




function shuffle(array) {
  let currentIndex = array.length, randomIndex; // This function is used to randomly shuffle elements of an array. It can be used to display items/elements in a random order.

  // While there remain elements to shuffle.    //I used this fucntion to reorder the tyres so that each time the game is started the user has to click tyres in a different sequence to the previous one.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);  /*used https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/ */
    currentIndex--;                                          /*used https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/ */

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const initialTyresOrder = ['front-left', 'front-right', 'rear-left', 'rear-right']; 

function Art() {
  const [clickOrder, setClickOrder] = useState([]); /*This is an array used to keep track of the order of the tyres that are clicked */
  const [startTime, setStartTime] = useState(null); /*This is to show when the game starts */
  const [endTime, setEndTime] = useState(null);     /*This is to show when the game ends. So either when all tyres are clicked or if a tyre is clicked in the wrong order. */
  const [gameStarted, setGameStarted] = useState(false); /*A boolean to determine whether the game has started or not. */
  const [timer, setTimer] = useState(0);
  const [tyresOrder, setTyresOrder] = useState([...initialTyresOrder]);

  useEffect(() => {
    let interval;
    if (gameStarted) {
      interval = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 100);                                   //This effect is used to handle the timer in how it is updated. It basically states that if the game has been started then the timer needs to come into effect but if it has not been started then the timer must not start.
    } else if (!gameStarted && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStarted, startTime, timer]);

  const handleStartGame = () => {
    setClickOrder([]);
    setStartTime(Date.now());                         /*This is the fucntion that actually starts the game when the user clicks the "start game button" */
    setEndTime(null);
    setGameStarted(true);
    setTimer(0);
    setTyresOrder(shuffle([...initialTyresOrder]));  /*This is used to shuffle the order of the tyres at the beginning of the game. */
  };

  const handleTyreClick = (tyre) => {
    if (!gameStarted) return;

    if (tyre !== tyresOrder[clickOrder.length]) {     /*This is the fucntion used to handle the tyres being clicked. It registers when the user clicks the tyre. */
      setGameStarted(false);
      alert('Wrong tyre! Game over. Try again.');
      return;
    }

    const clickedTyreElement = document.querySelector(`.tyre-click-zone.${tyre}`);
    clickedTyreElement.classList.add('animate');
    setTimeout(() => {
      clickedTyreElement.classList.remove('animate');
    }, 500);

    setClickOrder([...clickOrder, tyre]);

    if (clickOrder.length === 3) {
      setEndTime(Date.now());
      setGameStarted(false);
    }
  };

  useEffect(() => {
    if (clickOrder.length === 4) {
      if (JSON.stringify(clickOrder) === JSON.stringify(tyresOrder)) {
        alert(`Success! Time taken: ${(endTime - startTime) / 1000} seconds`);
      } else {
        alert('Wrong order! Try again.');                     
      }
      setGameStarted(false);
    }
  }, [clickOrder, endTime, startTime, tyresOrder]);

  return(
    <div className="art">
        <h1>.</h1>

         <header>
        <div className="singapore">
           <h2>SINGAPORE CIRCUIT</h2>
        </div>
        </header>

        <span className="flag">
         <img src= {Flag1} alt="Flag border" />
        </span>


        <span className="flag1">
         <img src= {Flag1} alt="Flag Border" />
        </span>

       

        <div className="sing"> 
            <h3>The Internet Artwork Description</h3>
            <p>The internet artwork that I decided to choose was the F1 pit stop game. </p>
            <p>I believe that this artwork truly encapsulates the theme of Ferrari and F1 well.</p>
            <p>Having a game in a website can be captivating and intriguing to users as well </p>
            <p>as fun. The game that I opted to create mimics the pitstop that happens in F1.</p>
            <p>Basically in a pitstop the F1 car comes in and a pit crew changes the tyres</p>
            <p>which, has to happen really quickly so that the car does not lose too many.</p>
            <p>places or any places at all. In the game that I created the user has to "change"</p>
            <p>the tyres but clicking on them in the correct order as fast as possible. The</p>
            <p>user can play the game as many times by pressing the "start game" button.</p>
            <img src="https://sportsbase.io/images/gpfans/copy_1200x800/6921e22ae83237828079e3f76b3480ef11fb3021.jpg" alt="" />
            </div>

            <span id="sing1">
                <h3>THE INTERNET ARTWORK</h3>
             </span>
             
             <span id="sing2">
                <h3>THE INTERNET ARTWORK</h3>
             </span>
  

       <div className="Art">
      <h3>F1 Pit Stop Game</h3>
      <button onClick={handleStartGame}>Start Game</button>
      {gameStarted && <h4>Time: {(timer / 1000).toFixed(1)} seconds</h4>}
      <div className="sequence-display">
        {tyresOrder.map((tyre, index) => (
          <span
            key={tyre}
            className={`sequence-item ${clickOrder.length === index ? 'current' : ''}`}
          >
            {tyre.replace('-', ' ')}
          </span>
        ))}
      </div>
      <div className="car-container">
        <img src={`${process.env.PUBLIC_URL}/formula1.png`} alt="F1 Car" className="car-image" />
        {initialTyresOrder.map((tyre) => (
          <div
            key={tyre}
            className={`tyre-click-zone ${tyre} ${clickOrder.includes(tyre) ? 'clicked' : ''} ${clickOrder.length === tyresOrder.indexOf(tyre) ? 'current' : ''}`}
            onClick={() => handleTyreClick(tyre)}
          ></div>
        ))}
      </div>
    </div>   

    
            
    <span className="flag2">
         <img src= {Flag1} alt="Flag Border" />
     </span> 

     <span className="flag3">
         <img src= {Flag1} alt="Flag Border" />
     </span> 

     <div className="rules">
        <h3>The Rules For The Game</h3>
     <p>This is a simple game and so there are not that many rules that need to be discussed. </p>
     <p>As mentioned above, this is a pitstop game which means it centres mainly around the tyres. </p>
     <p>In its original mode the game starts out with a sequence at the top which gives you the order in which you must click the tyres.</p>
     <p>This order is further emphasized by the yellow highlight in the sequence which jumps to the next tyre that needs to be clicked. </p>
     <p>You do not necessarily need to look at the sequence though because each tyre has a yellow border that corresponds with the tyre in the sequence that needs to be clicked.</p>
     <p>In its initial state, all the tyres of the F1 Ferrari appear red which means they need to be "changed" which as mentioned above is done by clicking the tyres in the correct order.</p>
     <p>If clicked in the correct order the tyres each turn green indicating they have been successfully "changed".</p>
     <p>However, if the tyres are not clicked in the correct order, the game istantaneously ends and you have to start again.</p>
     <p>Once done, you can continuously click "start game" button to play the game again because each time that you do, the sequence changes.</p>
    </div>

    <div className="sound3">
                <SoundPlayer3/>
            </div>

           <footer className="footer1">
                created in 2024 by Kiara Mohun
                <p>Made with love and drive</p>
            </footer>

        </div>

        
    );

}

export default Art;
