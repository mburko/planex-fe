import React, { useState } from 'react'
import { MonthCalendarGrid } from '../components/MonthCalendar/MonthCalendarGrid'
import moment from "moment";
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { RepeatMessage } from '../components/Event/RepeatMessage';


const MonthCalendar = () => {

     moment.updateLocale('en', { week: { dow: 1 } });
     const [activateDel, setActivateDel] = useState(false);
     const [activateEdit, setActivateEdit] = useState(false);
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('month').startOf('week');
     const [events, setEvents] = useState({});
     const [currEvent, setCurrEvent] = useState(null);
     const [currEvDate, setCurrEvDate] = useState(null);
     const [showMessage, setShowMessage] = useState(false);

     const prevHandler = () => {
          console.log('prev');
          setToday(prev => prev.clone().subtract(1, 'month'))
     }
     const nextHandler = () => {
          console.log('next');
          setToday(prev => prev.clone().add(1, 'month'))
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
          if (e.hasOwnProperty('selectedRepeat') && e.selectedRepeat !=='' && e.selectedRepeat !=='None') {
               setShowMessage(true);
          }
     }

     function deleteEvent(id, date) { 
          const ev_list = events[date];
          for (let i = 0; i < ev_list.length; i++) {
              console.log(ev_list[i]);
              if (id === ev_list[i].event_id) {
               ev_list.splice(i, 1);
                  break;
              }
          }
          
     }

     function editEvent(id, date, newEvent) {

          const ev_list = events[date];
          for (let i = 0; i < ev_list.length; i++) {
               console.log(ev_list[i]);
               if (id === ev_list[i].event_id) {
                    const ev_date = moment(newEvent.dateOfEvent).format('DDMMYYYY');
                    if(date!=ev_date) {
                         ev_list.splice(i, 1);
                         const event_list = ev_date in events ? events[ev_date] : [];
                         event_list.push(newEvent);
                         setEvents({
                              ...events,
                              [ev_date]: event_list
                         });
                    }else {
                         Object.assign(ev_list[i], newEvent);
                    }
                    break;
               }
          }
     }


     const editStatus = (a) => {
          setActivateEdit(a);

     }

     const delStatus = (a) => {
          setActivateDel(a);

     }
     return (
          <div >
                <RepeatMessage showMessage={showMessage} setShowMessage={setShowMessage}/>
               <DailyToDoList
                    clickedToDoList={clickedToDoList}
                    showToDoList={showToDoList} />
               <div style={{ 'margin': '10% 2% 0 20%' }}>

                    <MonthCalendarHeader
                         events={getEvents}
                         today={today}
                         prevHandler={prevHandler}
                         nextHandler={nextHandler}
                         currCalendar="month"
                         addEvent={addEvent}
                         editEvent={editEvent}
                         deleteEvent={deleteEvent}
                         activateDel={activateDel}
                         activateEdit={activateEdit}
                         currEvent={currEvent}
                         setCurrEvent={setCurrEvent}
                         currEvDate={currEvDate}
                    />
                    <MonthCalendarGrid
                         today={today}
                         startDay={startDay}
                         showToDoList={showToDoList}
                         clickedToDoList={clickedToDoList}
                         events={getEvents}
                         editStatus={(a) => editStatus(a)}
                         delStatus={(a) => delStatus(a)}
                         currEvent={currEvent}
                         setCurrEvent={setCurrEvent}
                         setCurrEvDate={setCurrEvDate}

                    />
               </div>
          </div>

     )
};
export { MonthCalendar };
