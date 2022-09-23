import React from "react";
import { useStore } from "../../Context/useAppStore";
import { QuestionState } from "../../Types/types";
import { fetchQuizQuestions } from "../../Utils/utils";
import StartQuiz from "./StartQuiz";

const StartQuizContainer = () => {
  const {
    clearUserAnswers,
    difficulty,
    gameOver,
    loading,
    score,
    setDifficulty,
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
    <StartQuiz
      start={start}
      loading={loading}
      setDifficulty={setDifficulty}
      gameOver={gameOver}
      userAnswers={userAnswers}
      totalQuestions={totalQuestions}
      score={score}
    />
  );
};

export default StartQuizContainer;
