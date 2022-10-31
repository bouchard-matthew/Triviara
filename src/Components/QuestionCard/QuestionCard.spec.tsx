import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuestionCard from "./QuestionCard";

describe("StartQuiz", () => {
  const baseProps = {
    callback: jest.fn(),
    gameOver: false,
    loading: false,
    number: 0,
    totalQuestions: 10,
    questions: [
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "easy",
        question:
          "Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?",
        correct_answer: "Michael Keaton",
        incorrect_answers: ["George Clooney", "Val Kilmer", "Adam West"],
        answers: [
          "Adam West",
          "George Clooney",
          "Val Kilmer",
          "Michael Keaton",
        ],
      },
    ],
    userAnswers: [],
  };

  test("Should Render QuestionCard", () => {
    const props = { ...baseProps };
    const { getByTestId } = render(<QuestionCard {...props} />);
    expect(getByTestId("wrapper")).toBeVisible();
    expect(getByTestId("question-text").textContent).toEqual(
      "Question: 1 / 10"
    );
  });

  test("Should Render QuestionCard", () => {
    const props = {
      ...baseProps,
      userAnswers: [
        {
          question:
            "Which company did Valve cooperate with in the creation of the Vive?",
          answer: "HTC",
          correct: true,
          correctAnswer: "HTC",
        },
      ],
    };
    const { getByTestId } = render(<QuestionCard {...props} />);
    expect(getByTestId("wrapper")).toBeVisible();
  });

  test("Should Not Render QuestionCard", () => {
    const props = {
      ...baseProps,
      gameOver: true,
      loading: true,
    };
    const { queryByText } = render(<QuestionCard {...props} />);
    expect(queryByText("Question: ")).not.toBeInTheDocument();
  });

  test("Should Not Render QuestionCard (loading = true; gameOver = false)", () => {
    const props = {
      ...baseProps,
      loading: true,
    };
    const { queryByText } = render(<QuestionCard {...props} />);
    expect(queryByText("Question: ")).not.toBeInTheDocument();
  });
});
