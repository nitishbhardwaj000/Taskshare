import React from "react"

function TaskCard(props) {
  return (
    <div 
      onClick={props.onToggle}
      style={{ 
        cursor: "pointer",
        border: "2px solid black",
        padding: "2rem",
        borderRadius: "8px",
        margin: "2rem",
        position: "relative" // for button positioning if needed
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <small>Status: {props.status}</small>
      <div>
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent toggling status
            props.onDelete();    // Trigger delete
          }}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard
