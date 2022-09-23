import { StoreState } from "../Context/useAppStore";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export interface NextQuestionProps
  extends Pick<
    StoreState,
    "loading" | "gameOver" | "number" | "totalQuestions"
  > {
  next: () => void;
}

export interface QuestionCardProps
  extends Pick<StoreState, "loading" | "gameOver"> {
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface StartQuizProps
  extends Pick<
    StoreState,
    | "loading"
    | "setDifficulty"
    | "gameOver"
    | "userAnswers"
    | "totalQuestions"
    | "score"
  > {
  start: () => void;
}
