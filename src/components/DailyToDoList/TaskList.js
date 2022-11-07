import React from 'react'
import { useState } from 'react'
import { Task } from './Task';
import './Task.css'

const TaskList = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      task: 'To walk the dog'
    },
    {
      id: 2,
      checked: false,
      task: 'To go shopping'
    },
    {
      id: 3,
      checked: false,
      task: 'To meet with someone'
    }
  ])

  const handleCheck = (id) =>{
    const listTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked } : task);
    setTasks(listTasks);
  }

  return (
    <ul className='task-list'>
      {
        tasks.map((task) => (
          <Task 
            key={task.id}
            task = {task}
            handleCheck={handleCheck}/>
        ))
      }
    </ul>
  )
}

export { TaskList };