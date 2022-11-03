import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NextQuestion from "./NextQuestion";

describe("NextQuestion", () => {
  const baseProps = {
    next: jest.fn(),
    gameOver: false,
    loading: false,
    totalQuestions: 0,
    number: 0,
    disabled: false,
  };

  test("Should Render Next Question Button", () => {
    const props = { ...baseProps };
    const { getByText } = render(<NextQuestion {...props} />);
    expect(getByText("Next Question")).toBeVisible();
  });

  test("Should Not Render Next Question Button", () => {
    const props = { ...baseProps, totalQuestions: 1 };
    const { queryByText } = render(<NextQuestion {...props} />);
    expect(queryByText("Next Question")).not.toBeInTheDocument();
  });

  test("Should Call Next Function when Clicked", () => {
    const props = { ...baseProps };
    const { getByText } = render(<NextQuestion {...props} />);
    fireEvent.click(getByText("Next Question"));
    expect(props.next).toHaveBeenCalledTimes(1);
  });
});
