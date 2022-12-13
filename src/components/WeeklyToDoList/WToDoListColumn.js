import React from 'react'
import { MyTask } from '../DailyToDoList/MyTask';
import { TaskList } from '../DailyToDoList/TaskList';
import { useState } from 'react';
import './WToDoListColumn.css'

const WToDoListColumn = (props) => {

  const [tasks, setTasks] = useState(props.tasks);
 
  const handleCheck = (id) =>{
    const listTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked } : task);
    setTasks(listTasks)
  }


  return (
    <div class = 'columnT'>
    <h1 class='columnTitleT'>
      {props.weekday}
      <p>
      {props.daynum}
      </p>
    </h1>
    <div>
        {tasks.sort((a, b) => { if(a.selectedCategory>b.selectedCategory)return 1;
          if(a.selectedCategory<b.selectedCategory)return -1;
          return 0;}).map((e) => (
          <MyTask
            task={e}
            handleCheck={handleCheck}
            />
            
        ))}
       
      </div>
</div>
  )
}

export {WToDoListColumn};