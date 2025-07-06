import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, onDelete, onToggle }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default GoalList;
