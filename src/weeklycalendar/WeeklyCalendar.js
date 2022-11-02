import WeeklyCalendarTable from './WeeklyCalendarTable';
import { useState } from 'react';
import moment from "moment";
import './WeeklyCalendar.css'
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';



const WeeklyCalendar = () => {
  moment.updateLocale('en', {week:{dow:1}});
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('week');
 
 const prevHandler = () => {
      console.log('prev');
      setToday(prev => prev.clone().subtract(1, 'week'))
 }
 const nextHandler = () => {
      console.log('next');
      setToday(prev => prev.clone().add(1, 'week'))
 };
  return (
    <div>  
          <MonthCalendarHeader
               style = {{'margin': '10% 15% 20% 30%'}}
               today={today} 
               prevHandler={prevHandler} 
               nextHandler={nextHandler}/>
          <WeeklyCalendarTable 
                today={today} 
                startDay={startDay}/>
       
    </div>

  )

}; 
export { WeeklyCalendar};

export default WeeklyCalendar;