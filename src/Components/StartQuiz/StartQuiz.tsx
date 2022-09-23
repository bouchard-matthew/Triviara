import React from "react";
import { StartQuizProps, Difficulty } from "../../Types/types";

const StartQuiz = ({
  start,
  setDifficulty,
  gameOver,
  loading,
  userAnswers,
  totalQuestions,
  score,
}: StartQuizProps) => {
  return (
    <>
      <h1>Triviara</h1>

      <div>
        {Object.entries(Difficulty).map(([key, value], idx) => {
          return (
            <button
              onClick={() => setDifficulty(value)}
              key={idx}
              value={value}
              disabled={!gameOver}
            >
              {value}
            </button>
          );
        })}
      </div>

      {!loading && (gameOver || userAnswers.length === totalQuestions) ? (
        <>
          <button onClick={start} className="start">
            Start
          </button>
        </>
      ) : null}

      {!gameOver && <p className="score">Score: {score}</p>}
    </>
  );
};

export default StartQuiz;
