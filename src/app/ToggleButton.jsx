"use client";
import React, { useState } from "react";

const ToggleButton = () => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
  };

  return (
    <button
      className={`inline-flex items-center px-2 ml-2 py-1 rounded-md text-sm transition-all duration-300 ${
        completed ? "bg-emerald-600" : "bg-custommiddle"
      }`}
      onClick={handleClick}
    >
      {completed ? "completed" : "incomplete"}
    </button>
  );
};

export default ToggleButton;
