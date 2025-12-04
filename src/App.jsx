import { useState } from 'react'
import './App.css'

function App() {       
  const [tasks, setTasks] = useState ([
    {text:'learn react', completed: false},
    {text: 'build a project', completed: false},
    {text: 'master components', completed: false }, 
    {text: 'deploy app', completed: false}
  ])   
  const [newTask, setNewTask] = useState ('') 
  const [filter, setFilter] = useState ('all')  

  const addTask = () => {
    setTasks([...tasks, {text: newTask, completed: false}])  
    setNewTask('')
  }    

  const deleteTask = (indexToDelete) => { 
    setTasks (tasks.filter((task, index) => index !== indexToDelete)) 
  }

  const toggleComplete = (indexToToggle) => {
    setTasks (tasks.map((task, index) => 
      index === indexToToggle
      ? { ...task, completed: !task.completed }
      : task
    ))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

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
      <div className="filter-buttons">
        <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
        >All</button>
        <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
        >Active</button>
        <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
        >Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input 
            type="checkbox"
            checked={task.completed}
            onChange= { () => toggleComplete(index)} 
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
              </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App
