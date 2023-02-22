
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
      return [...prev, {name:name, completed: false}]
    })
  }

  const updateComplete = (taskIdx, newComplete) => {
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[taskIdx].completed = newComplete
      return newTasks;
    })
  }
  return (
    <div className='max-w-xs mx-auto my-5'>
      <TaskForm onAdd={addTask} />
      {tasks.map((e, idx) => (
        <Task {...e} onToggle={completed => updateComplete(idx, completed)}/>
      ))}
      
    </div>
  );
}

export default App;
