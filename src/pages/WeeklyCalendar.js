import WeeklyCalendarTable from '../components/WeeklyCaledar/WeeklyCalendarTable';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { useState } from 'react';
import format from 'date-fns/format';
import { Event } from '../components/Event/WeekEvent';
import moment from "moment";
import '../components/WeeklyCaledar/WeeklyCalendar.css'
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';
import { RepeatMessage } from '../components/Event/RepeatMessage';

const WeeklyCalendar = () => {

     moment.updateLocale('en', { week: { dow: 1 } });
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [events, setEvents] = useState({});
     const [activateDel, setActivateDel] = useState(false);
     const [activateEdit, setActivateEdit] = useState(false);
     const [currEvent, setCurrEvent] = useState(null);
     const [currEvDate, setCurrEvDate] = useState(null);
     const [showMessage, setShowMessage] = useState(false);


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
          if (e.hasOwnProperty('selectedRepeat') && e.selectedRepeat !=='') {
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
          <div className="weekly-calendar-page">
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
                         currCalendar="week"
                         addEvent={addEvent}
                         editEvent={editEvent}
                         deleteEvent={deleteEvent}
                         activateDel={activateDel}
                         activateEdit={activateEdit}
                         currEvent={currEvent}
                         setCurrEvent={setCurrEvent}
                         currEvDate={currEvDate}
                    />

                    <WeeklyCalendarTable
                         events={getEvents}
                         showToDoList={showToDoList}
                         today={today}
                         clickedToDoList={clickedToDoList}
                         startDay={startDay}
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


export { WeeklyCalendar };

