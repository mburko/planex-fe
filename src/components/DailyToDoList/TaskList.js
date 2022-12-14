import React from 'react'
import { useState } from 'react'
import { MyTask } from './MyTask';
import './MyTask.css'

const TaskList = (props) => {

  const [tasks, setTasks] = useState([
     props.tasks
  ])

  const handleCheck = (id) =>{
    const listTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked } : task);
    setTasks(listTasks);
  }
 

  return (
    <ul className='task-list'>
      {
        tasks.sort().map((task) => (props.date===task.date ?
          <MyTask 
            key={task.id}
            task = {task}
            handleCheck={handleCheck}/> : null
        ))
      }
    </ul>
  )
}

export { TaskList };