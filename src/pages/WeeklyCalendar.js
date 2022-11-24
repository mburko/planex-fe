import WeeklyCalendarTable from '../components/WeeklyCaledar/WeeklyCalendarTable';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { useState } from 'react';
import format from 'date-fns/format';
import { Event } from '../components/Event/Event';
import moment from "moment";
import '../components/WeeklyCaledar/WeeklyCalendar.css'
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';


const WeeklyCalendar = () => {
     moment.updateLocale('en', { week: { dow: 1 } });
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [events, setEvents] = useState({});

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
     function getEvents() {
          return events;
     }
     function addEvent(e) {
          const event_list = moment(e.dateOfEvent).format('DDMMYYYY') in events ? events[moment(e.dateOfEvent).format('DDMMYYYY')] : [];
          event_list.push(e);
          setEvents({
               ...events,
               [moment(e.dateOfEvent).format('DDMMYYYY')]: event_list
          });
          console.log(events);
     }
     return (
          <div className="weekly-calendar-page">
               <DailyToDoList
                    clickedToDoList={clickedToDoList}
                    showToDoList={showToDoList} />
               <div style={{ 'margin': '10% 2% 0 20%' }}>
                    <MonthCalendarHeader
                         today={today}
                         prevHandler={prevHandler}
                         nextHandler={nextHandler}
                         currCalendar="week"
                         addEvent={addEvent}
                    />

                    <WeeklyCalendarTable
                         events={getEvents}
                         showToDoList={showToDoList}
                         today={today}
                         clickedToDoList={clickedToDoList}
                         startDay={startDay} />
               </div>

          </div>

     )

};


export { WeeklyCalendar };

