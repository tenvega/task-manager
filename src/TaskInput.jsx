function TaskInput({ newTask, setNewTask, addTask })    {
  return (
    <div className="input-container">
      <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Enter a new task' 
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default TaskInput