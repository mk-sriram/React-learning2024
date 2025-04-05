import React, { useEffect, useState } from "react";

export default function Color() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const numbers = array.filter((number) => {
    return number >= 5;
  });

  console.log(numbers)
  const getColor = () => {
    const hexArray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const newColor = new Array(6)
      .fill("")
      .map(() => hexArray[Math.ceil(Math.random() * hexArray.length)])
      .join("");
    return `#${newColor}`;
  };
  useEffect(() => {
    const actualColor = getColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getColor(), getColor()].sort(() => 0.5 - Math.random())
    );

    //Caching -> store the fucntion , not reruins,
  }, []);

  const handleAnswerClick = (answer) => {
    if (answer === color) {
      setIsAnswer();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
        justifyContent: "center",
      }}
    >
      <div
        className="box"
        style={{
          backgroundColor: `${color}`,
          width: "400px",
          height: "400px",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {answers.map((value, index) => {
          return (
            <button onClick={handleAnswerClick(value)} key={index}>
              {" "}
              {value}
            </button>
          );
        })}
      </div>
      {}
    </div>
  );
}
