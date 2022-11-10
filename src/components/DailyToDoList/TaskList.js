import React from 'react'
import { useState } from 'react'
import { MyTask } from './MyTask';
import './MyTask.css'

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
      task: 'To meet with someone who i dont know now im happy'
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
          <MyTask 
            key={task.id}
            task = {task}
            handleCheck={handleCheck}/>
        ))
      }
    </ul>
  )
}

export { TaskList };