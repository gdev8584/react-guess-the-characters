import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import characters from "./Characters";
const App = () => {
  const [currChar, setCurrChar] = useState({
    name: "",
    role: "",
    abilities: [],
    options: []
  });

  const [score, setScore] = useState(0);

  const changeChar = () => {};
  changeChar();
  const scoreHandler = (e) => {
    if (e.target.innerText === currChar.name) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  useEffect(() => {
    let random = Math.floor(Math.random() * 15);
    // setCurrChar(()=>{
    //   return characters[random]
    // })
    const axt = [[characters[random + 1],
    characters[random + 2],
    characters[random + 3],
    characters[random]],[characters[random],
    characters[random + 2],
    characters[random + 3],
    characters[random+1]],[characters[random + 1],
    characters[random],
    characters[random + 3],
    characters[random+2]],[characters[random + 1],
    characters[random + 2],
    characters[random],
    characters[random+3]]]
    const rand = Math.floor(Math.random() * 3);
    console.log(axt[rand])
    setCurrChar({
      name: characters[random].name,
      role: characters[random].role,
      abilities: characters[random].abilities,
      options: axt[rand]
    });
  }, [score]);

  return (
    <div id="main">
      <div className="container">
        <h1 className="header">Guess the Character</h1>
        <div className="ques-area">
          <div className="score" id="score">
            Score: {score}
          </div>
          <h3>The character has the following abilities:</h3>
          <h4>Role: {currChar.role}</h4>
          {currChar.abilities.join()}
          <div className="options">
            {currChar.options.map((option) => (
              <button onClick={scoreHandler}>{option.name}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
