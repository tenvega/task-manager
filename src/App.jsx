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
    if (newTask.trim() === '') return
    setTasks([...tasks, { text: newTask, completed: false }])
    setNewTask ('')
  }    

  const deleteTask = (indexToDelete) => {
  // Add fade-out class
  const taskElement = document.querySelectorAll('li')[indexToDelete]
  if (taskElement) {
    taskElement.style.animation = 'fadeOut 0.3s ease-out'
    // Wait for animation to finish before removing
    setTimeout(() => {
      setTasks(tasks.filter((task, index) => index !== indexToDelete))
    }, 300)
  } else {
    setTasks(tasks.filter((task, index) => index !== indexToDelete))
  }
}


  const toggleComplete = (indexToToggle) => {
    setTasks (tasks.map((task, index) => 
      index === indexToToggle
      ? { ...task, completed: !task.completed }
      : task
    ))
  }

  const editTask = (index, newText) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, text: newText } : task
    ))
  }

  const clearCompleted = () => {
  // Get all completed tasks and animate them out
  const allTaskElements = document.querySelectorAll('li')
  const completedIndices = []
  
  tasks.forEach((task, index) => {
    if (task.completed) {
      completedIndices.push(index)
      if (allTaskElements[index]) {
        allTaskElements[index].style.animation = 'fadeOut 0.3s ease-out'
      }
    }
  })
  
  // Wait for animation to finish before removing
  setTimeout(() => {
    setTasks(tasks.filter((task) => !task.completed))
  }, 300)
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
        {tasks.some(t => t.completed) && (<button  className='clear-completed' onClick={clearCompleted}
       >Clear Completed Tasks
       </button>)}
      </div>      
      <ul>
        {filteredTasks.map((task) => {
          const realIndex = tasks.findIndex(t => t === task)
          return (
          <TaskItem
            key={realIndex}
            task={task}
            index={realIndex}
            toogleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
        })}
      </ul>
    </div>
  )

}

export default App
