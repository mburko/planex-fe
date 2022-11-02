import CalendarColumn from './СalendarColumn';
import './WeeklyCalendar.css'



const WeeklyCalendarTable = ({today, startDay}) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray =[...Array(7)].map(()=>day.add(1, 'day').clone());
 return(
  <div class='weekly-calendar'>
    {
      daysArray.map((dayItem) =>(
          <CalendarColumn 
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