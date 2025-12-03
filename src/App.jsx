import { useState } from 'react'
import './App.css'

function App() {       
  const [tasks, setTasks] = useState (['learn react', 'build a project', 'master components', 'deploy app'])   
  const [newTask, setNewTask] = useState ('') 

  const addTask = () => {
    setTasks([...tasks, newTask])  
    setNewTask('')
  }    

  const deleteTask = (indexToDelete) => { 
    setTasks (tasks.filter((task, index) => index !== indexToDelete)) 
  }

    return (                      
     <div className="app-container">                      
      <h1>Task Manager</h1>
      <div className="input-container">
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter a new task' 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App
