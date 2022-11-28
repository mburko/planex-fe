import React from 'react'
import { TaskList } from '../DailyToDoList/TaskList';
import './WToDoListColumn.css'

const WToDoListColumn = (props) => {
  return (
    <div class = 'columnT'>
    <h1 class='columnTitleT'>
      {props.weekday}
      <p>
      {props.daynum}
      </p>
    </h1>
    <TaskList date = {props.date}/>
</div>
  )
}

export {WToDoListColumn};