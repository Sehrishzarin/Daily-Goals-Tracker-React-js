import React, { useState, useEffect, useRef } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import Quote from "./components/Quote";
import bgVideo from "./assets/background.mp4";
import "./App.css";
//------------------------------------------------------ Mind you, i like to seperate my code with comments to understand it better
function App() {
  //------------------------------------------------------------------------------------------ Task related
  const [goals, setGoals] = useState([]);
  const inputRef = useRef(null);

  const addGoal = (goalText) => {
    setGoals((prev) => [...prev, { id: Date.now(), text: goalText, completed: false }]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const toggleComplete = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };
 //------------------------------------------------------------------------------------------ Additional feature related

const videoRef = useRef(null);
const [isMuted, setIsMuted] = useState(true);
 useEffect(() => {
  if (videoRef.current) {
    videoRef.current.muted = true;
    videoRef.current.play().catch((err) =>
      console.warn("Autoplay blocked, waiting for user interaction.")
    );
  }
}, []);
  
 const toggleSound = () => {
  if (videoRef.current) {
    const newMuteStatus = !isMuted;
    videoRef.current.muted = newMuteStatus;
    setIsMuted(newMuteStatus);
    videoRef.current.play(); 
  }
};
  //------------------------------------------------------------------------------------------  return

  return (
    
    <div className="app-container">
    <video ref={videoRef} autoPlay loop className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

<div className="navbar">
  
  <a href="https://github.com/sehrishzarin">GitHub</a>
  <a href="https://linkedin.com/in/sehrishzarin">LinkedIn</a>
</div>
      <div className="content-overlay">
        
        <h1>｡𖦹°‧ Daily Goals Tracker</h1>
        <Quote />
        <GoalInput onAddGoal={addGoal} inputRef={inputRef} />
        <GoalList goals={goals} onDelete={deleteGoal} onToggle={toggleComplete} />
      </div>
      <button
  onClick={toggleSound}
  style={{
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#0047AB",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    zIndex: 999,
  }}
>
  {isMuted ? "🔊 Enable Sound" : "🔇 Mute"}
</button>

    </div>
  );
}

export default App;
