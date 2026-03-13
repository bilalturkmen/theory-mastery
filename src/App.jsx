import { QuizProvider } from "./context/QuizContext";
import QuizHeader from "./features/QuizHeader";
import QuizController from "./features/QuizController";

export default function App() {
  return (
    <QuizProvider>
      <div className="app">
        <QuizHeader />
        <main className="app-content">
          <QuizController />
        </main>
      </div>
    </QuizProvider>
  );
}
