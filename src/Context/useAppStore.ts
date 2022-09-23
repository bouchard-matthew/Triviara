import create from "zustand";
import { AnswerObject, Difficulty, QuestionState } from "../Types/types";

export type StoreState = {
  loading: boolean;
  setLoading: (value: boolean) => void;
  questions: QuestionState[];
  setQuestions: (value: QuestionState[]) => void;
  totalQuestions: number;
  number: number;
  setNumber: (value: number) => void;
  score: number;
  setScore: (value: number) => void;
  gameOver: boolean;
  setGameOver: (value: boolean) => void;
  difficulty: Difficulty;
  setDifficulty: (value: Difficulty) => void;
  userAnswers: AnswerObject[];
  setUserAnswers: (value: AnswerObject) => void;
  clearUserAnswers: () => void;
};

export const useStore = create<StoreState>((set) => ({
  // initial state
  todos: [],
  loading: false,
  questions: [],
  totalQuestions: 10,
  number: 0,
  score: 0,
  gameOver: true,
  difficulty: Difficulty.EASY,
  userAnswers: [],

  // methods for manipulating state
  setLoading: (value: boolean) => {
    set(() => ({
      loading: value,
    }));
  },
  setGameOver: (value: boolean) => {
    set(() => ({
      gameOver: value,
    }));
  },
  setNumber: (value: number) => {
    set(() => ({
      number: value,
    }));
  },
  setScore: (value: number) => {
    set(() => ({
      score: value,
    }));
  },
  setDifficulty: (value: Difficulty) => {
    set(() => ({
      difficulty: value,
    }));
  },
  setQuestions: (value: QuestionState[]) => {
    set(() => ({
      questions: value,
    }));
  },
  setUserAnswers: (value: AnswerObject) => {
    set((state) => ({
      userAnswers: [...state.userAnswers, value],
    }));
  },
  clearUserAnswers: () => {
    set((state) => ({
      userAnswers: [],
    }));
  },
}));
