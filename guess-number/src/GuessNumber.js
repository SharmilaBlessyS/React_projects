import React, { useState, useEffect } from "react";


const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const GuessNumber = () => {
  const [numbers, setNumbers] = useState([]);
  const [target, setTarget] = useState(null);
  const [message, setMessage] = useState("");
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [revealedNumbers, setRevealedNumbers] = useState([false, false, false]);

  const generateNumbers = () => {
    const newNumbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
    setNumbers(newNumbers);
    setTarget(newNumbers[Math.floor(Math.random() * 3)]);
    setMessage("");
    setSelectedDiv(null);
    setRevealedNumbers([false, false, false]);
  };

  const handleClick = (index) => {
    const updatedRevealedNumbers = [...revealedNumbers];
    updatedRevealedNumbers[index] = true;
    setRevealedNumbers(updatedRevealedNumbers);

    if (numbers[index] === target) {
      setMessage("Correct!");
      setSelectedDiv(index);
      setTimeout(() => generateNumbers(), 1000); // Reset game after 1 second
    } else {
      setMessage("Wrong!");
      setSelectedDiv(index);
    }
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  return (
    <div className="game">
      <h1>Guess the Number Game</h1>
      <div className="numbers">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`number-box ${selectedDiv === index ? (message === "Correct!" ? "correct" : "wrong") : ""}`}
            onClick={() => handleClick(index)}
          >
            {revealedNumbers[index] && number}
          </div>
        ))}
      </div>
      <p>Guess the number: {target}</p>
      {message && <p className="message">{message}</p>}
      <button onClick={generateNumbers}>Reset Game</button>
    </div>
  );
};

export default GuessNumber;
