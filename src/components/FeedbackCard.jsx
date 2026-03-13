import { ArrowRight, CheckCircle2, Info, XCircle } from "lucide-react";
import { Button, MediaDisplay } from "./";

export default function FeedbackCard({ q, userAnswer, onReview }) {
  const isCorrect = userAnswer === q.correctAnswer;
  const isSkipped = userAnswer === null;
  const status = isCorrect ? "success" : isSkipped ? "warning" : "error";
  const hasMedia = q.type !== "text" && (q.image || q.video);

  return (
    <div className={`card card--feedback card--feedback-${status}`}>
      <div className="card__header">
        <span className="card__meta">Question {q.index + 1}</span>
        <div className="flex-center">
          <Button variant="outline" size="sm" onClick={() => onReview(q.index)}>
            Review <ArrowRight size={14} />
          </Button>
          <span className={`status-badge status-badge--${status}`}>
            {isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect"}
          </span>
        </div>
      </div>

      <div className="card__body">
        <h3 className="card__question card__question--sm">{q.question}</h3>

        <div className={`card__grid ${!hasMedia ? "card__grid--full" : ""}`}>
          <div className="options-list">
            {q.options.map((option, idx) => {
              const isRight = q.correctAnswer === idx;
              const isUser = userAnswer === idx;
              return (
                <div
                  key={idx}
                  className={`options-list__item feedback-option ${
                    isRight ? "feedback-option--correct" : ""
                  } ${isUser && !isCorrect ? "feedback-option--incorrect" : ""}`}
                >
                  <span>{option}</span>
                  {isRight && <CheckCircle2 size={18} />}
                  {isUser && !isCorrect && <XCircle size={18} />}
                </div>
              );
            })}
          </div>
          {hasMedia && (
            <MediaDisplay
              type={q.type}
              src={q.image || q.video}
              autoPlayVideo={false}
            />
          )}
        </div>

        {q.explanation && (
          <div className="explanation-box">
            <div className="explanation-header">
              <Info size={16} /> Explanation
            </div>
            <p className="explanation-text">{q.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
