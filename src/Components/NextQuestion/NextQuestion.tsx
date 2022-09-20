import React from "react";
import { NextQuestionProps } from "../../Types/types";

const NextQuestion = ({ next }: NextQuestionProps) => {
  return (
    <button onClick={next} className="next">
      Next Question
    </button>
  );
};

export default NextQuestion;
