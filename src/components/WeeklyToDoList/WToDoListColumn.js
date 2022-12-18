import React, { useEffect } from 'react'
import { TaskList } from '../DailyToDoList/TaskList';
import './WToDoListColumn.css'
import { useState } from 'react';
import { MyTask } from '../DailyToDoList/MyTask';

const WToDoListColumn = (props) => {

  const [tasks, setTasks] = useState(props.tasks);

  const category = { 'High': 1, 'Middle': 2, 'Low': 3 };

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task);
    setTasks(listTasks)
  }

  useEffect(() => {
    setTasks(props.tasks);
  }, [props.tasks])
  
  return (
    <div class='columnT'>
      <h1 class='columnTitleT'>
        {props.weekday}
        <p>
          {props.daynum}
        </p>
      </h1>
      <div>
        {tasks.sort((a, b) => {
          if (category[a.selectedCategory] > category[b.selectedCategory]) return 1;
          if (category[a.selectedCategory] < category[b.selectedCategory]) return -1;
          return 0;
        }).map((e) => (
          <MyTask
            task={e}
            handleCheck={handleCheck}
          />

        ))}

      </div>
    </div>
  )
}

export { WToDoListColumn };