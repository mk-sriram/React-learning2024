import React from "react";
import { useState } from "react";

const Colors = ["blue", "red", "green"];

export default function Color() {
  const [answerColor, setAnswerColor] = useState("blue");
  const [isAnswer, setIsAnswer] = useState(false);
  function handleCheck(color) {
    if (color === answerColor) {
      setIsAnswer(true);
      console.log(isAnswer);
    } else {
      setIsAnswer(false);
    }
  }

  return (
    <div>
      <div
        className="bigColor"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: answerColor,
        }}
      ></div>

      <div className="buttons">
        {Colors.map((color, colorID) => (
          <button
            key={colorID}
            onClick={() => {
              handleCheck(color);
            }}
          >
            {color}
          </button>
        ))}
      </div>
      {isAnswer && <p>Correct Color!</p>}
    </div>
  );
}
