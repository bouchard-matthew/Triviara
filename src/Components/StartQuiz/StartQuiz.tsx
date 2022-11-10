import React from "react";
import { StoreState } from "../../Context/useAppStore";
import { Difficulty } from "../../Types/types";

interface StartQuizProps
  extends Pick<
    StoreState,
    | "loading"
    | "setDifficulty"
    | "difficulty"
    | "gameOver"
    | "userAnswers"
    | "totalQuestions"
    | "score"
  > {
  start: () => void;
}

const StartQuiz = ({
  start,
  setDifficulty,
  difficulty,
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
              className={
                gameOver
                  ? difficulty == value
                    ? `selected-${value} difficulty-${value}`
                    : `difficulty-${value}`
                  : "disabled"
              }
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
