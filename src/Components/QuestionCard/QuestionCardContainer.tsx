import React from "react";
import { useStore } from "../../Context/useAppStore";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

const QuestionCardContainer = () => {
  const {
    gameOver,
    loading,
    number,
    questions,
    score,
    setScore,
    setUserAnswers,
    totalQuestions,
    userAnswers,
  } = useStore();

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore(score + 1);
      // Save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(answerObject);
    }
  };

  return (
    <>
      {!gameOver && !loading && (
        <Wrapper>
          <p className="number">
            Question: {number + 1} / {totalQuestions}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: questions[number].question,
            }}
          />
          <div>
            {questions[number].answers.map((answer) => (
              <ButtonWrapper
                key={answer}
                correct={userAnswers[number]?.correctAnswer === answer}
                userClicked={userAnswers[number]?.answer === answer}
              >
                <button
                  disabled={userAnswers[number] ? true : false}
                  value={answer}
                  onClick={checkAnswer}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            ))}
          </div>
        </Wrapper>
        // <QuestionCard callback={callback} />
      )}
    </>
  );
};

export default QuestionCardContainer;
