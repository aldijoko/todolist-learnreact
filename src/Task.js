// import React from 'react'
import Checbox from './Checbox'

const Task = ({name, done, onToggle}) => {
  return (
    <div className='bg-blue-600 rounded-lg px-2 py-1 mt-2 flex items-center'>
      <Checbox 
        checked={done}
        onClick={() => onToggle(!done)}/>
      {name}
    </div>
  )
}

export default Task