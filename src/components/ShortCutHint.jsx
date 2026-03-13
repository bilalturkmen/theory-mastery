import { HelpCircle } from "lucide-react";

export default function ShortCutHint() {
  return (
    <div className="shortcut-hint">
      <HelpCircle size={14} className="text-muted" />
      <div className="shortcut-tooltip">
        <p>
          ⌨️ <strong>Shortcuts</strong>
        </p>
        <ul>
          <li>
            <span>1-4</span> Select Option
          </li>
          <li>
            <span>Arrows</span> Prev / Next
          </li>
          <li>
            <span>F</span> Flag Question
          </li>
          <li>
            <span>Enter</span> Quick Submit
          </li>
        </ul>
      </div>
    </div>
  );
}
