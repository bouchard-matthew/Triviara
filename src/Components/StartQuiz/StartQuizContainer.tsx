import React from "react";
import { useStore } from "../../Context/useAppStore";
import { QuestionState } from "../../Types/types";
import { fetchQuizQuestions } from "../../Utils/utils";
import StartQuiz from './StartQuiz';

const StartQuizContainer = () => {
  const {
    clearUserAnswers,
    difficulty,
    gameOver,
    loading,
    score,
    setGameOver,
    setLoading,
    setNumber,
    setQuestions,
    setScore,
    totalQuestions,
    userAnswers,
  } = useStore();

  const start = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions: QuestionState[] = await fetchQuizQuestions(
      totalQuestions,
      difficulty
    );

    setQuestions(newQuestions);
    setScore(0);
    clearUserAnswers();
    setNumber(0);
    setLoading(false);
  };

  return (
    <>
      <h1>Triviara</h1>
      {!loading && (gameOver || userAnswers.length === totalQuestions) ? (
        <StartQuiz start={start} />
      ) : null}
      {!gameOver && <p className="score">Score: {score}</p>}
    </>
  );
};

export default StartQuizContainer;
