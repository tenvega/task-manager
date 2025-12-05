function TaskInput({ newTask, setNewTask, addTask })    {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        addTask()
      }
    }
  return (
    <div className="input-container">
      <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder='Enter a new task' 
      />
      <button onClick={addTask} disabled={newTask.trim() === ''}>
        Add Task</button>
    </div>
  )
}

export default TaskInput