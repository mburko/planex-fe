import { TaskList } from "../DailyToDoList/TaskList";
import { WToDoListColumn } from "./WToDoListColumn";
import "./WToDoListColumn.css"


const WeeklyToDoListTable = (props) => {
 

  const day = props.startDay.clone().subtract(1, 'day');
  const daysArray =[...Array(7)].map(()=>day.add(1, 'day').clone());
 return(
  <div class='weekly-toDoList-table'>
    {
      daysArray.map((dayItem) =>(
          <WToDoListColumn 
            key = {dayItem.format('DDMMYYYY')}
            date = {dayItem.format('DD-MM-YYYY')}
            weekday = {dayItem.format('dddd')}
            daynum = {dayItem.format('D')}
            />
          
      ))
    }
  </div>
 )}
  
 export {WeeklyToDoListTable};