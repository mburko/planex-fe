import React from 'react'
import { useState } from 'react'
import { MyTask } from './MyTask';
import './MyTask.css'

const TaskList = (props) => {

  const [tasks, setTasks] = useState([
      {
        id: 1,
        checked: false,
        task: 'To walk the dog',
        date: '25-11-2022',
        priority: 2
      },
      {
        id: 2,
        checked: false,
        task: 'To go shopping',
        date: '24-11-2022',
        priority: 3
      },
      {
        id: 3,
        checked: false,
        task: 'To meet with someone',
        date: '23-11-2022',
        priority: 1
      },
      {
        id: 4,
        checked: false,
        task: 'To walk the dog',
        date: '25-11-2022',
        priority: 1
      },
      {
        id: 5,
        checked: false,
        task: 'To do a lab',
        date: '25-11-2022',
        priority: 2
      }
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