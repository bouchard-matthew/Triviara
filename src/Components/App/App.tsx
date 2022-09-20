import React from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import { StartQuiz } from "../StartQuiz";
import { NextQuestion } from "../NextQuestion";
import { QuestionCard } from "../QuestionCard";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <StartQuiz />
        <QuestionCard />
        <NextQuestion />
      </Wrapper>
    </>
  );
};

export default App;
