import './DailyToDoList.css'
import { SlClose } from 'react-icons/sl'
import TaskComponent from './TaskComponent'
<link rel="stylesheet" type="text/css" href="C:\Users\ACER\planex\src\DailyToDoList.css"></link>


const DailyToDoList = () => {
  return (
    <div class = 'daily-to-do'>
      <SlClose
            size={40}
            class="sidebar_close_icon" />
      <h1 class = 'to-do-list-header'>
        To-Do List
        <div class = 'left-line'/>
        <div class = 'right-line'/>
      </h1>
      <div>
        <TaskComponent />
        <TaskComponent />
      </div>
    </div>
  )
}


export default DailyToDoList