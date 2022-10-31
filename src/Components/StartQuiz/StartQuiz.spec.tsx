import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartQuiz from "./StartQuiz";
import { Difficulty } from "../../Types/types";

describe("StartQuiz", () => {
  const baseProps = {
    difficulty: Difficulty.EASY,
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

  test("Should Not Render Start Button when Loading is TRUE", () => {
    const props = { ...baseProps, loading: true };
    const { queryByText } = render(<StartQuiz {...props} />);
    expect(queryByText("Start")).not.toBeInTheDocument();
  });

  test("Should Not Render Start Button when totalQuestions !== userAnswers.length", () => {
    const props = { ...baseProps, loading: true, totalQuestions: 1 };
    const { queryByText } = render(<StartQuiz {...props} />);
    expect(queryByText("Start")).not.toBeInTheDocument();
  });

  test("Should Not Render Start Button when loading == FALSE and totalQuestions !== userAnswers.length", () => {
    const props = { ...baseProps, loading: false, totalQuestions: 1 };
    const { queryByText } = render(<StartQuiz {...props} />);
    expect(queryByText("Start")).not.toBeInTheDocument();
  });

  test("Should Call Start Function when Clicked", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    fireEvent.click(getByText("Start"));
    expect(props.start).toHaveBeenCalledTimes(1);
  });

  test("Should Set Difficulty to 'easy' ", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    fireEvent.click(getByText("easy"));
    expect(props.setDifficulty).toHaveBeenCalledWith(Difficulty.EASY);
  });

  test("Should Set Difficulty to 'medium' ", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    fireEvent.click(getByText("medium"));
    expect(props.setDifficulty).toHaveBeenCalledWith(Difficulty.MEDIUM);
  });

  test("Should Set Difficulty to 'hard' ", () => {
    const props = { ...baseProps, gameOver: true };
    const { getByText } = render(<StartQuiz {...props} />);
    fireEvent.click(getByText("hard"));
    expect(props.setDifficulty).toHaveBeenCalledWith(Difficulty.HARD);
  });
});
