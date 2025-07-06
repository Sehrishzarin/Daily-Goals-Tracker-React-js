import React from "react";

function GoalInput({ onAddGoal, inputRef }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      onAddGoal(value);  // 1🔹Add goals
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="What's your goal today?"
        style={{
          padding: "10px",
          borderRadius: "6px",
          width: "60%",
          maxWidth: "400px",
        }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
        ➕
      </button>
    </form>
  );
}

export default GoalInput;
