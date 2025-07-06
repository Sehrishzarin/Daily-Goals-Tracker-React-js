import React from "react";

function GoalItem({ goal, onDelete, onToggle }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: goal.completed ? "#aaa" : "white",
        textDecoration: goal.completed ? "line-through" : "none",
      }}
    >
      {goal.text}

      <div>
        <button
          onClick={() => onToggle(goal.id)}
          style={{
            marginRight: "10px",
            padding: "4px 10px",
            backgroundColor: goal.completed ? "#666" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
            {/* 2🔹Mark as completed */}
          {goal.completed ? "Undo" : "Done"} 
        </button>

        <button 
          onClick={() => onDelete(goal.id)}
          style={{
            padding: "4px 10px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🗑️
        </button> {/* 3🔹Delete goals */}
      </div>
    </li>
  );
}

export default GoalItem;
