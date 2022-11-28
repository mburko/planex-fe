import WeeklyCalendarTable from '../components/WeeklyCaledar/WeeklyCalendarTable';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { useState } from 'react';
import moment from "moment";
import '../components/WeeklyCaledar/WeeklyCalendar.css'
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

 const [clickedToDoList, setClickToDoList] = useState(false);

 const showToDoList = () => {
     setClickToDoList(!clickedToDoList);

 }
 const day = startDay.clone().subtract(1, 'day');
 const daysArray =[...Array(7)].map(()=>day.add(1, 'day').clone());
  return (
    <div className="weekly-calendar-page">  
          <DailyToDoList
               clickedToDoList = {clickedToDoList}
               showToDoList = {showToDoList}/>
          <div style={{ 'margin':'10% 2% 0 20%'}}> 
               <MonthCalendarHeader
                    //style = {{'margin': '10% 15% 20% 30%'}}
                    today={today} 
                    prevHandler={prevHandler} 
                    nextHandler={nextHandler}
                    currCalendar="week"/>
               <WeeklyCalendarTable 
                    showToDoList = {showToDoList}
                    today={today} 
                    clickedToDoList = {clickedToDoList}
                    startDay={startDay}
                    daysArray={daysArray}/>
          </div>
       
    </div>

  )

}; 


export { WeeklyCalendar };

