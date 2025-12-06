import { useState } from "react"

function TaskItem({task, index, toogleComplete, deleteTask, editTask}) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)

    const handleDoubleClick = () => {
        setIsEditing (true)
    }

    const handleSave = () => {
        if(editText.trim() !== '') {
        editTask(index, editText.trim())
        
        }
        setIsEditing(false)
    }
    
    const handleCancel = () => {
        setEditText(task.text)
        setIsEditing(false)
    }

    const hadleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave()
        } else if (e.key === 'Escape') {
            handleCancel()
        }
    }

  return (
   <li>
    <input 
    type="checkbox" 
    checked={task.completed}
    onChange={() => toogleComplete(index)}
    />
    {isEditing ? (
        <input 
        type="text" 
        className="edit-input"
        value={editText}
        onChange={(e)=> setEditText(e.target.value)}
        onBlur={handleSave}
        onKeyDown={hadleKeyDown}
        autoFocus
         /> ) : (
        <span 
        className={task.completed ? 'completed' : ''}
        onDoubleClick={handleDoubleClick}
        >
            {task.text } </span> 
        )}
        <button onClick={() => deleteTask(index)}>Delete</button>
   </li>
  )
}

export default TaskItem