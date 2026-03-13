import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import questions from "../data/questions";

const QuizContext = createContext();
const STORAGE_KEY = "driving_theory_progress";
const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  isReviewing: false,
  bookmarks: [],
};

// UTILITIES

const saveToStorage = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadFromStorage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
};

// REDUCER

function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.payload;
      return { ...state, answers: newAnswers };
    }

    case "NEXT":
      return {
        ...state,
        currentQuestion: Math.min(
          state.currentQuestion + 1,
          questions.length - 1,
        ),
      };

    case "PREV":
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0),
      };

    case "SUBMIT":
      return { ...state, submitted: true, isReviewing: false };

    case "REVIEW_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
        submitted: false,
        isReviewing: true,
      };

    case "RETURN_TO_RESULTS":
      return { ...state, submitted: true, isReviewing: false };

    case "TOGGLE_BOOKMARK": {
      const index = state.currentQuestion;
      const isBookmarked = state.bookmarks.includes(index);
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter((i) => i !== index)
          : [...state.bookmarks, index],
      };
    }
    case "CLEAR_ALL_BOOKMARKS":
      return { ...state, bookmarks: [] };

    case "RESET":
      localStorage.removeItem(STORAGE_KEY);
      return initialState;

    case "DEMO_FILL": {
      return {
        ...state,
        answers: questions.map((q, idx) => {
          // If you already answered it, keep your answer
          if (state.answers[idx] !== null) return state.answers[idx];
          const roll = Math.random();
          if (roll < 0.1) return null;
          if (roll < 0.9) return q.correctAnswer;
          const wrongOptions = q.options
            .map((_, i) => i)
            .filter((i) => i !== q.correctAnswer);
          return wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        }),
        submitted: true,
        isReviewing: false,
      };
    }
    default:
      return state;
  }
}

// PROVIDER

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(
    quizReducer,
    loadFromStorage() || initialState,
  );

  const [timeLeft, setTimeLeft] = useState(57 * 60);
  const [theme, setTheme] = useState(() => {
    // Check the attribute that our script just set on the HTML tag
    return document.documentElement.getAttribute("data-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    saveToStorage(state);
  }, [state]);

  // Keyboard shortcutsf
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT") return;
      switch (e.key) {
        case "ArrowRight":
        case "Enter":
          if (!state.submitted) dispatch({ type: "NEXT" });
          break;
        case "ArrowLeft":
          if (!state.submitted && state.currentQuestion > 0)
            dispatch({ type: "PREV" });
          break;
        case "1":
        case "2":
        case "3":
        case "4": {
          const optionIdx = parseInt(e.key) - 1;
          const currentQ = questions[state.currentQuestion];
          if (currentQ && optionIdx < currentQ.options.length) {
            dispatch({ type: "ANSWER", payload: optionIdx });
          }
          break;
        }
        case "f":
          dispatch({ type: "TOGGLE_BOOKMARK" });
          break;
        case "d":
          dispatch({ type: "DEMO_FILL" });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.currentQuestion, state.submitted, state.answers]);

  // Timer
  useEffect(() => {
    if (state.submitted) return;
    if (timeLeft <= 0) {
      dispatch({ type: "SUBMIT" });
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [state.submitted, timeLeft]);

  const value = useMemo(
    () => ({ state, dispatch, timeLeft, setTimeLeft, theme, toggleTheme }),
    [state, timeLeft, theme],
  );
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export { QuizContext, QuizProvider };
