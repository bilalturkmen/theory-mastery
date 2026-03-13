import React from "react";

export default function StatBox({ icon, val, label }) {
  return (
    <div className="stat-box">
      {React.cloneElement(icon, { size: 20 })}
      <span className="stat-box__value">{val}</span>
      <span className="stat-box__label">{label}</span>
    </div>
  );
}
