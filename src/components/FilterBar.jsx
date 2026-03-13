import { Filter } from "lucide-react";
import questions from "../data/questions";
import { Button } from "./";

export default function FilterBar({
  currentFilter,
  setFilter,
  stats,
  bookmarkCount,
  dispatch,
}) {
  const filters = [
    { id: "all", label: "All", count: questions.length },
    { id: "incorrect", label: "Mistakes", count: stats.incorrect },
    { id: "skipped", label: "Skipped", count: stats.skipped },
    { id: "bookmarked", label: "Flagged", count: bookmarkCount },
  ];

  return (
    <div className="filter-bar">
      <div className="filter-bar__header">
        <span className="filter-bar__label">
          <Filter size={14} /> Review Filter
        </span>
        {currentFilter === "bookmarked" && bookmarkCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch({ type: "CLEAR_ALL_BOOKMARKS" })}
            className="btn--danger-text"
          >
            Clear All Flags
          </Button>
        )}
      </div>

      <div className="filter-bar__buttons">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-bar__btn ${currentFilter === f.id ? "is-active" : ""}`}
            onClick={() => setFilter(f.id)}
            disabled={f.count === 0 && f.id !== "all"}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>
    </div>
  );
}
