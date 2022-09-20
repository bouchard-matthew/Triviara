import React from "react";
import { useStore } from "../../Context/useAppStore";
import { QuestionCardProps } from "../../Types/types";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

const QuestionCard = ({ callback }: QuestionCardProps) => {
  const { number, totalQuestions, questions, userAnswers } = useStore();
  return (
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
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
