import React from 'react'
import Checbox from './Checbox'

const Task = ({name, complete}) => {
  return (
    <div className='bg-blue-600 rounded-lg px-2 py-1 mt-2 flex items-center'>
      <Checbox defaultChecked={complete}/>
      {name}
    </div>
  )
}

export default Task