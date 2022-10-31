import { Difficulty, Question, QuestionState } from "../Types/types";
import { Buffer } from "buffer";

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  const questions: QuestionState[] = data.results.map((question: Question) => ({
    correct_answer: question.correct_answer,
    question: question.question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
  return questions;
};
