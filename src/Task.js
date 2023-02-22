// import React from 'react'
import { useState } from 'react'
import Checbox from './Checbox'

const Task = ({name, done, onToggle, onTrash, onRename}) => {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className={'bg-blue-600 rounded-lg px-2 py-2 mt-2 flex items-center transition opacity-100 duration-300 task ' + (done ? 'done' : '')}>
      <Checbox 
        checked={done}
        onClick={() => onToggle(!done)}/>
      {!editMode && (
        <div className='flex-grow px-2' onClick={() => setEditMode(prev => !prev)}>
        <span className="text-lg relative flex-grow before:absolute before:h-[1px] before:content-[''] before:block before:w-0 before:bg-gray-400 before:top-3">{name}</span>
        </div>
      )}
      {editMode && (
        <form className='flex-grow' onSubmit={e => {e.preventDefault();setEditMode(false)}}>
          <input className='rounded-md border border-gray-300 px-1' type="text" value={name} onChange={e => onRename(e.target.value)} />
        </form>
      )}
      
      
      <button className='cursor-pointer' onClick={onTrash}>
      <svg className='h-3 fill-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      </button>
    </div>
  )
}

export default Task