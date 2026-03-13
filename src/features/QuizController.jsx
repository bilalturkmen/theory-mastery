import { useQuiz } from "../hooks/useQuiz";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";

export default function QuizController() {
  const { state } = useQuiz();
  return state.submitted ? <ResultView /> : <QuestionView />;
}
