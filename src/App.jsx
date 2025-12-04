import { useState } from 'react'
import './App.css'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'

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
        <TaskInput 
          type="text"
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask} 
        />
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
          <TaskItem
            key={index}
            task={task}
            index={index}
            toogleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  )

}

export default App
