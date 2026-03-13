import {
  CheckCircle2,
  CircleEllipsis,
  Clock,
  HelpCircle,
  RotateCcw,
  XCircle,
} from "lucide-react";
import questions from "../data/questions";
import { useQuiz } from "../hooks/useQuiz";
import { Button, StatBox } from "./";

export default function ResultSummary({ stats, onReset, isPass }) {
  const { timeLeft } = useQuiz();
  const outOfTime = timeLeft <= 0;
  const accuracy = Math.round((stats.correct / questions.length) * 100);

  return (
    <div className={`card ${isPass ? "is-pass" : "is-fail"}`}>
      <div className="result-summary_header">
        {outOfTime && (
          <div className="result-summary__alert">
            <Clock size={14} /> TIME EXPIRED
          </div>
        )}
        <h2
          className={`result-summary__title ${isPass ? "text-success" : "text-error"}`}
        >
          {isPass ? "Congratulations!" : "Keep Practicing"}
        </h2>
        <p className="result-summary__subtitle">
          {isPass
            ? `You've mastered the theory with ${stats.correct}/${questions.length} correct.`
            : `You need at least 43 correct answers to pass. You're ${43 - stats.correct} away.`}
        </p>
      </div>
      <div className="result-summary_content">
        <div className="score-circle">
          <span className="score-circle__value">{stats.correct}</span>
          <span className="score-circle__total">/ {questions.length}</span>
        </div>

        <div className="stats-grid">
          <StatBox
            icon={<CheckCircle2 className="icon-success" />}
            val={stats.correct}
            label="Correct"
          />
          <StatBox
            icon={<XCircle className="icon-error" />}
            val={stats.incorrect}
            label="Wrong"
          />
          <StatBox
            icon={<HelpCircle className="icon-warning" />}
            val={stats.skipped}
            label="Skipped"
          />
          <StatBox
            icon={<CircleEllipsis className="icon-primary" />}
            val={accuracy + "%"}
            label="Accuracy"
          />
        </div>
      </div>
      <div className="result-summary_action">
        <Button variant="primary" onClick={onReset}>
          <RotateCcw size={18} /> Retake Test
        </Button>
      </div>
    </div>
  );
}
