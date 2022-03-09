import React from 'react';
import { useState, useEffect } from 'react';
import './css/style.css';
import './css/loader.css';
// import { startLevelUpInterval, stopCurrentGame } from './utils/start-game';
import { getRandomElementPosition, getElementRandomBackgroundColor } from './utils/element-random-changes';
import { updateScore } from "./utils/score-api";
import { getTopFive } from "./utils/score";
import { getRandomPlayerName } from './utils/dialog';
// import { update } from 'lodash';

export default function HomePage() {
  const [level, setLevel] = useState(0);

  const [points, setPoints] = useState(0);
  const [isDialogVisible, setDialogVisibility] = useState(false);
  const [name, setName] = useState('')

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <>

      <div>

        <Circle
          height={height}
          width={width}
          bgc={backgroundColor}
          savePoints={newPoints => {
            setPoints(newPoints)
            getRandomElementPosition()
              .then(res => {
                let [x, y] = res;
                setWidth(x);
                setHeight(y);
              });

            getElementRandomBackgroundColor()
              .then(res => {
                setBackgroundColor(res[0]);
              });
          }}
        />

        <div className='stats'>

          <Stats
            level={level}
            points={points}
          />

          <div id='scoreboard'>

            <p>Scoreboard:</p>

            <Scoreboard />

          </div>

          <button onClick={() => setDialogVisibility(true)}>
            Start
          </button>

          <button onClick={() => {
            updateScore(points, name);
            stopCurrentGame();
          }}>
            Stop
          </button>

        </div>

      </div>

      <Dialog
        isDialogVisible={isDialogVisible}
        onConfirm={userName => {
          setName(userName);
        }}
        onClose={(visible) => {
          setDialogVisibility(visible);
          startLevelUpInterval();
        }}
        setRandomPosition={() => {
          getRandomElementPosition()
            .then(res => {
              let [x, y] = res;
              setWidth(x);
              setHeight(y);
            });
          }
        }
        setRandomBackgroundColor={ () => {
          getElementRandomBackgroundColor()
            .then(res => {
              setBackgroundColor(res[0]);
            });
        }}
        saveLevel={newLevel => setLevel(newLevel)}

      />

    </>
  );
}

function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getTopFive()
      .then(res => {
        setScores(res);
      })
  }, []);

  return (
    <div>
      {
        scores.map(userScore => (
          <div key={userScore.name}> {userScore.name} : {userScore.points}</div>
        ))
      }
    </div>
  );
}

function Stats({ level = 0, points = 0 }) {
  return (

    <>
      Points: <div id="points">{points}</div>
      Level: <div id="level">{level}</div>
    </>

  );

}


function Circle({ height = 0, width = 0, bgc = 0, savePoints = () => { } }) {
  const [points, setPoints] = useState(0);


  return (
    <div className="circle" style={{ top: height, left: width, backgroundColor: bgc }} onClick={() => {
      setPoints(points + 1);
      savePoints(points);
    }}></div>
  )
}




function Dialog({ isDialogVisible = false, onConfirm = () => { }, onClose = () => { } }) {
  const [name, setName] = useState('')

  useEffect(() => {
    getRandomPlayerName()
      .then((res) => {
        setName(res[0])
      })
  }, '')

  const onButtonClick = () => {
    onConfirm(name);
    onClose(false);
  };
  return isDialogVisible ? (

    <dialog id="dialogWindow" open>

      <p>Write your name:</p>

      <input type="text" id="name" value={name} onChange={() => setName(document.getElementById("name").value)} />

      <menu>

        <button id="dialogConfirmButton" value="default" onClick={onButtonClick}>Confirm</button>

      </menu>

    </dialog>

  ) : null;
}


function stopCurrentGame() {
  continueGame = false;
}

function startLevelUpInterval({ setRandomPosition = () => { }, setRandomBackgroundColor = () => { }, saveLevel = () => { } }) {
  if (continueGame === false || currentLevel === 10) {
    return;
  }
  let backgroundColorElementInterval = setInterval(() => {
    setRandomBackgroundColor()
  }, BACKGROUND_COLOR_INTERVAL_MILLS);

  let randomElementPositionInterval = setInterval(() => {
    setRandomPosition()
  }, POSTION_INTERVAL_MILLS[currentLevel]);

  setTimeout(() => {
    clearInterval(backgroundColorElementInterval);
    clearInterval(randomElementPositionInterval);

    currentLevel += 1;
    saveLevel(currentLevel);

    startLevelUpInterval(currentLevel);
  }, LEVEL_TIME_MILLS);
}
