
import './App.css';
import { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if(tasks.length === 0) return
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
  }, [tasks])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks)
  }, [])

  const addTask = (name) => {
    setTasks(prev => {
      return [...prev, {name:name, done: false}]
    })
  }

  const updateComplete = (taskIdx, newDone) => {
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[taskIdx].done = newDone
      return newTasks;
    })
  }

  const getMessage = () => {
    const percentage = numberComplete/numberTotal * 100;
    if(percentage === 100) return 'Great Job!'
    if(percentage >= 50) return 'Halfway There!'
    if(percentage === 0) return 'Nothing Done!'
    return 'Keep it Going'
  }

  const numberComplete = tasks.filter(e => e.done).length
  const numberTotal = tasks.length
  return (
    <div className='max-w-xs mx-auto my-5'>
      <h1 className='text-center text-4xl font-bold'>{numberComplete}/{numberTotal} Complete</h1>
      <h2 className='text-center mt-2 text-2xl'>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((e, index) => (
        <Task {...e} onToggle={done => updateComplete(index, done)}/>
      ))}
      
    </div>
  );
}

export default App;
