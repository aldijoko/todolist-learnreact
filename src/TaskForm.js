import React, { useState } from 'react'

const TaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      onAdd(taskName)
      setTaskName('')
    }
  return (
    <form 
      onSubmit={handleSubmit}
      className='border border-blue-600 rounded-md flex p-1 mt-5'>
        <button className='bg-blue-800 border-none rounded-md cursor-pointer px-2 py-1'>+</button>
        <input 
            className='border-none w-full py-1 px-2 block bg-transparent'
            type="text" 
            placeholder='New Task' 
            value={taskName} 
            onChange={e => setTaskName(e.target.value)} />
    </form>
  )
}

export default TaskForm