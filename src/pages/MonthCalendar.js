import React, { useState } from 'react'
import {MonthCalendarGrid} from '../components/MonthCalendar/MonthCalendarGrid'
import moment from "moment";
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';


const MonthCalendar = () => {
     
    moment.updateLocale('en', {week:{dow:1}});
    //const today = moment();
    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf('month').startOf('week');
   
   const prevHandler = () => {
        console.log('prev');
        setToday(prev => prev.clone().subtract(1, 'month'))
   }
   const nextHandler = () => {
        console.log('next');
        setToday(prev => prev.clone().add(1, 'month'))
   };
    return (
      <div style={{'margin':'5% 2% 0 20%'}}>  
       <MonthCalendarHeader
            today={today} 
            prevHandler={prevHandler} 
            nextHandler={nextHandler}/>
      <MonthCalendarGrid  today={today} startDay={startDay} />
      </div>

    )
  
}; 
export { MonthCalendar};
