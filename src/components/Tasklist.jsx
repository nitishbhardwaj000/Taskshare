import TaskCard from "./TaskCard"

function Tasklist(props)
{
    const tasks=props.tasks
    if(tasks.length===0)
    {
        return(
            <div>
                <h3>No tasks found</h3>
            </div>
        )
    }
    return(
        <div>
            {tasks.map((tas)=>{
                return(
                    <TaskCard key={tas.id} title={tas.title} description={tas.description} status={tas.status} 
                    onToggle={()=>props.onToggleStatus(tas.id)} onDelete={() => props.onDeleteTask(tas.id)}
                    />
                )
            })}
        </div>
    )
}
export default Tasklist;