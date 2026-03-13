import { useEffect, useMemo, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";
import questions from "../data/questions";
import {
  ResultSummary,
  FilterBar,
  FeedbackCard,
  ScrollToTop,
} from "../components/index";

export default function ResultView() {
  const { state, dispatch, setTimeLeft } = useQuiz();
  const [preferredFilter, setPreferredFilter] = useState(() => {
    return localStorage.getItem("quiz_review_filter") || "all";
  });

  const stats = useMemo(
    () =>
      state.answers.reduce(
        (acc, ans, i) => {
          if (ans === null) acc.skipped++;
          else if (ans === questions[i].correctAnswer) acc.correct++;
          else acc.incorrect++;
          return acc;
        },
        { correct: 0, incorrect: 0, skipped: 0 },
      ),
    [state.answers],
  );

  const activeFilter = useMemo(() => {
    const counts = {
      all: questions.length,
      incorrect: stats.incorrect,
      skipped: stats.skipped,
      bookmarked: state.bookmarks.length,
    };
    return preferredFilter !== "all" && counts[preferredFilter] === 0
      ? "all"
      : preferredFilter;
  }, [preferredFilter, stats, state.bookmarks.length]);

  useEffect(() => {
    localStorage.setItem("quiz_review_filter", activeFilter);
  }, [activeFilter]);

  const isPass = stats.correct >= 43;
  const filteredQuestions = questions
    .map((q, i) => ({ ...q, index: i }))
    .filter((q) => {
      const ans = state.answers[q.index];
      if (activeFilter === "incorrect")
        return ans !== null && ans !== q.correctAnswer;
      if (activeFilter === "skipped") return ans === null;
      if (activeFilter === "bookmarked")
        return state.bookmarks.includes(q.index);
      return true;
    });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleReset = () => {
    localStorage.removeItem("quiz_review_filter");
    dispatch({ type: "RESET" });
    setTimeLeft(57 * 60);
  };

  return (
    <div className="results-view">
      <ResultSummary stats={stats} onReset={handleReset} isPass={isPass} />
      <FilterBar
        currentFilter={activeFilter}
        setFilter={setPreferredFilter}
        stats={stats}
        bookmarkCount={state.bookmarks.length}
        dispatch={dispatch}
      />
      {filteredQuestions.map((q) => (
        <FeedbackCard
          key={q.index}
          q={q}
          userAnswer={state.answers[q.index]}
          onReview={(idx) =>
            dispatch({ type: "REVIEW_QUESTION", payload: idx })
          }
        />
      ))}
      <ScrollToTop />
    </div>
  );
}
