import { useState, useEffect } from 'react'
import './App.css'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'

function App() {       
  console.log('Component rendered') 
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('tasks')
  return savedTasks ? JSON.parse(savedTasks) : []
})

  const [newTask, setNewTask] = useState ('') 
  const [filter, setFilter] = useState ('all')  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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

  const clearCompleted = () => {
    setTasks (tasks.filter((task) => !task.completed))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

    return (                      
     <div className="app-container">                      
      <h1>Task Manager</h1>
       <p className='task-stats'>
          {tasks.length === 0 
          ? 'No tasks yet. Add one above!' 
          : `${tasks.filter(t => !t.completed).length} active, ${tasks. filter(t => t.completed).length} completed`
         }
       </p>

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
      <button className='clear-completed' onClick={clearCompleted}>
        Clear Completed Tasks
      </button>
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
