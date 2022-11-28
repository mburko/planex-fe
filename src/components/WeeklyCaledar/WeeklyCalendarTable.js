import CalendarColumn from './СalendarColumn';
import './WeeklyCalendar.css'



const WeeklyCalendarTable = (props) => {
  
 return(
  <div class='weekly-calendar'>
    {
      props.daysArray.map((dayItem) =>(
          <CalendarColumn 
            clickedToDoList = {props.clickedToDoList}
            showToDoList = {props.showToDoList}
            key = {dayItem.format('DDMMYYYY')}
            weekday = {dayItem.format('dddd')}
            daynum = {dayItem.format('D')}
          />
      ))
    }
  </div>
 
     
 )

  
}

export default WeeklyCalendarTable;