import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'
import AddTaskForm from './components/AddTaskForm'
import Tasklist from './components/Tasklist'

function App() {
  
  const [filter,setFilter]=useState("all")
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

      const filteredTasks = tasks.filter((task) => {
       if (filter === 'all') {
            return true;
          }
        return task.status === filter;
})
function handleDeleteTask(taskId)
{
  const newtasks=tasks.filter((task)=>task.id!==taskId)
  setTasks(newtasks)
}
   
   function handleToggleStatus(taskId)
   {
      const newtasks=tasks.map((task)=>{
        //toggle tasks 
        if(task.id===taskId)
        {
          const newstatus=task.status==="pending"?"completed":"pending"
          return {...task,status:newstatus}
        }else{
          return task
        }
      })
      setTasks(newtasks)
   }

  return (
    <div style={{textAlign:"center",margintop:"30rem"}}>
     
      <h1>TaskShare-Task Collaboration</h1>
      <AddTaskForm onAddtask={handleAddTask}/>
      <button onClick={()=>setFilter("all")}>All</button>
      <button onClick={()=>setFilter("pending")}>Pending</button>
      <button onClick={()=>setFilter("completed")}>Completed</button>
      {/* //why and how to knwo if pass handleToggleStatus as props */}
      {/* You pass functions like handleDeleteTask to child components when the child needs to trigger a change in the parent's state.
        This is a standard React pattern called lifting state up. */}
      <Tasklist tasks={filteredTasks} onToggleStatus={handleToggleStatus} onDeleteTask={handleDeleteTask}/>
    
    </div>
  )
}

export default App
