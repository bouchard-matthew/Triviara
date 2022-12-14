import React from "react";
import { StoreState } from "../../Context/useAppStore";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

interface QuestionCardProps
  extends Pick<
    StoreState,
    | "loading"
    | "gameOver"
    | "number"
    | "totalQuestions"
    | "questions"
    | "userAnswers"
  > {
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard = ({
  callback,
  gameOver,
  loading,
  number,
  totalQuestions,
  questions,
  userAnswers,
}: QuestionCardProps) => {
  return (
    <>
      {!gameOver && !loading && (
        <Wrapper data-testid="wrapper">
          <p className="number" data-testid="question-text">
            Question: {number + 1} / {totalQuestions}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: `${questions[number].question}`,
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
                  onClick={callback}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default QuestionCard;
