import React from "react";
import { useState } from "react";
function AddTaskForm({onAddtask})
{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const handleformsubmit=(e)=>{
        e.preventDefault();//prevent default reload for better spped
        if(!title||!description)
            {
                alert("Please enter title and description");
                return;
            }
        
        const newTask={
            id:Date.now(),
            title:title,
            description:description,
            status:"pending",
        };
        onAddtask(newTask);
        setDescription("");
        setTitle("");
    }
    const renderForm = () => {
    return (
      <form
        onSubmit={handleformsubmit}
        style={{
          margin: "2rem auto",
          padding: "2rem",
          border: "1px solid #eee",
          borderRadius: "8px",
          maxWidth: "400px",
          textAlign: "left",
        }}
      >
        <h3>Add New Task</h3>

        <div style={{ marginBottom: "1rem" }}>
          <label>Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Description</label>
          <br />
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit">Add Task</button>
      </form>
    );
  };
        
    return(
        <div>
            <h1>Add Task Form</h1>
            {renderForm()}
        </div>
    )
}

export default AddTaskForm;