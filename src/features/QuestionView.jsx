import { useQuiz } from "../hooks/useQuiz";
import { Button, MediaDisplay, ShortCutHint } from "../components/";
import questions from "../data/questions";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Flag } from "lucide-react";

export default function QuestionView() {
  const { state, dispatch, timeLeft } = useQuiz();
  const q = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  const selectedAnswer = state.answers[state.currentQuestion];
  const isBookmarked = state.bookmarks.includes(state.currentQuestion);
  const hasMedia = q.type !== "text" && (q.image || q.video);

  const formatTime = (s) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const getTimerClass = () => {
    if (timeLeft <= 60) return "text-error pulse-animation";
    if (timeLeft <= 300) return "text-warning";
    return "";
  };
  return (
    <div className="card">
      <div className="card__header">
        <div className="flex-center">
          <span className="card__meta">
            Question {state.currentQuestion + 1} of {questions.length}
          </span>
          <ShortCutHint />
        </div>
        <div className="flex-center">
          <span className={`card__timer ${getTimerClass()}`}>
            <Clock size={14} /> {formatTime(timeLeft)}
          </span>
          <Button
            variant="icon"
            className={isBookmarked ? "is-active" : ""}
            onClick={() => dispatch({ type: "TOGGLE_BOOKMARK" })}
            title={isBookmarked ? "Remove Flag" : "Flag for Review"}
            style={{ paddingInline: "0.5rem" }}
          >
            <Flag size={18} fill={isBookmarked ? "currentColor" : "none"} />
          </Button>
        </div>
      </div>

      <div className="card__progress">
        <div className="card__progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="card__body">
        <h2 className="card__question">{q.question}</h2>
        <div className={`card__grid ${!hasMedia ? "card__grid--full" : ""}`}>
          <div className="options-list">
            {q.options.map((option, i) => (
              <button
                key={i}
                data-key={i + 1}
                className={`options-list__item ${
                  selectedAnswer === i ? "is-selected" : ""
                }`}
                onClick={() => dispatch({ type: "ANSWER", payload: i })}
              >
                {option}
              </button>
            ))}
          </div>
          {hasMedia && <MediaDisplay type={q.type} src={q.image || q.video} />}
        </div>
      </div>

      <div className="card__footer">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "PREV" })}
          disabled={state.currentQuestion === 0}
        >
          <ArrowLeft size={18} /> Prev
        </Button>
        {state.isReviewing && (
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "RETURN_TO_RESULTS" })}
          >
            Results
          </Button>
        )}
        <Button
          variant="primary"
          onClick={() =>
            dispatch({
              type:
                state.currentQuestion === questions.length - 1
                  ? "SUBMIT"
                  : "NEXT",
            })
          }
        >
          {state.currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          {state.currentQuestion === questions.length - 1 ? (
            <CheckCircle2 size={18} />
          ) : (
            <ArrowRight size={18} />
          )}
        </Button>
      </div>
    </div>
  );
}
