
import './App.css';
import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (name) => {
    setTasks(prev => {
      return [...prev, {name:name, done: false}]
    })
  }
  return (
    <div className='max-w-xs mx-auto my-5'>
      <TaskForm onAdd={addTask} />
      {tasks.map(e => (
        <Task />
      ))}
      
    </div>
  );
}

export default App;
