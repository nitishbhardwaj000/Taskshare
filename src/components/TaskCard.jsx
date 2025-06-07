import React from "react"
function TaskCard(props)
{
    return(
        <div  onClick={props.onToggle}style={{ 
            cursor:"pointer",
            border:"2px solid black",padding:"2rem",borderRadius:"8px", margin:"2rem",
            }}>
          <h3>{props.title}</h3>
         <p>{props.description}</p>
        <small>Status: {props.status}</small>
        
        </div>
        
    )
}
export default TaskCard