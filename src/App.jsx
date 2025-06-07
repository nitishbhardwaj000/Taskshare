import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'
import AddTaskForm from './components/AddTaskForm'

function App() {
  
  const [tasks,setTasks]=useState([
    {
      id:"1",
      title:"Task1",
      description:"leanr react basics",
      status:"pending",
    },{
      id:"2",
      title:"Task2",
      description:"pick grocery from store",
      status:"pending",
    },{
      id:"3",
      title:"Task3",
      description:"go to gym",
      status:"completed",
    }
  ])
  const handleAddTask=(task)=>{
    setTasks([...tasks,task])
  }

  return (
    <div style={{textAlign:"center",margintop:"30rem"}}>
     
      <h1>TaskShare-Task Collaboration</h1>
      <AddTaskForm onAddtask={handleAddTask}/>
     <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
        {tasks.map((task)=>{
          return <TaskCard key={task.id} description={task.description} title={task.title} status={task.status}/>
        })}
    </div>
    
    </div>
  )
}

export default App
