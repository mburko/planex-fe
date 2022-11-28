import { WeeklyToDoListTable } from "../components/WeeklyToDoList/WToDoListTable";
import { MonthCalendarHeader } from "../components/MonthCalendar/MonthCalendarHeader";
import { useState } from "react";
import moment from "moment";





const WeeklyToDoList = () => {

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
    <div style={{ 'margin-top':'10%'}}> 
               <MonthCalendarHeader
                    today={today} 
                    prevHandler={prevHandler} 
                    nextHandler={nextHandler}
                    currCalendar="week"/>
               <WeeklyToDoListTable
                    today={today} 
                    startDay={startDay}/> 
    </div>

  )

}; 


export { WeeklyToDoList };
