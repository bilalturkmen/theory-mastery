import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowLeft style={{ transform: "rotate(90deg)" }} />
    </button>
  );
}
