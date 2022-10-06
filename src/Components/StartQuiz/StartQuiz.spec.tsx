import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartQuiz from "./StartQuiz";

describe("StartQuiz", () => {
  const baseProps = {
    start: jest.fn(),
    setDifficulty: jest.fn(),
    gameOver: false,
    loading: false,
    userAnswers: [],
    totalQuestions: 0,
    score: 0,
  };

  test("Should Render Start Button", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    expect(getByText("Start")).toBeVisible();
  });

  test("Should Not Render Start Button", () => {
    const props = { ...baseProps, loading: true };
    const { queryByText } = render(<StartQuiz {...props} />);
    expect(queryByText("Start")).not.toBeInTheDocument();
  });

  test("Should Call Start Function when Clicked", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    fireEvent.click(getByText("Start"));
    expect(props.start).toHaveBeenCalledTimes(1);
  });
});
