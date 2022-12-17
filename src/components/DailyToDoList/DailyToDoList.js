import './DailyToDoList.css'
import { SlClose } from 'react-icons/sl'
import format from 'date-fns/format';
import moment from "moment";
import { TaskList } from './TaskList'

const DailyToDoList = (props) => {
  return (
    <div className = {props.clickedToDoList ? 'daily-to-do list_active' : 'daily-to-do'}>
      
        <SlClose
            onClick={props.showToDoList}
            size={40}
            class="sidebar_close_icon" />
      <h1 class = 'to-do-list-header'>To-Do List</h1>
      <div class = 'left-line'/>
      <div class = 'right-line'/>
      <TaskList date={props.date}
      tasks={props.tasks}/>
    </div>
  )
};


export { DailyToDoList };