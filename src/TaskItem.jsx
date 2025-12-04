function TaskItem({task, index, toogleComplete, deleteTask}) {
  return (
    <li>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange= { () => toogleComplete(index)} 
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  )
}

export default TaskItem