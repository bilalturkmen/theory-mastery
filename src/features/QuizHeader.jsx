import { useQuiz } from "../hooks/useQuiz";
import { Moon, Sun } from "lucide-react";
import { Button, SVGLogo } from "../components/";

export default function QuizHeader() {
  const { dispatch, theme, toggleTheme } = useQuiz();
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div
          className="flex-center"
          onDoubleClick={() => dispatch({ type: "DEMO_FILL" })}
        >
          <SVGLogo width={42} height={42} className="logo primary" />
          <h1 className="app-header__title">Theory Mastery</h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem",
              }}
            >
              <Moon size={20} />
              Dark Mode
            </span>
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem",
              }}
            >
              <Sun size={20} />
              Light Mode
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
