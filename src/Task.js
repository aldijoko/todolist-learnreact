import React from 'react'
import Checbox from './Checbox'

const Task = () => {
  return (
    <div className='bg-blue-600 rounded-lg px-2 py-1 mt-2 flex items-center'>
      <Checbox defaultChecked={true}/>
      task tes
    </div>
  )
}

export default Task