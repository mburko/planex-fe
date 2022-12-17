import React, { useState, useEffect } from 'react'
import { MonthCalendarGrid } from '../components/MonthCalendar/MonthCalendarGrid'
import moment from "moment";
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { RepeatMessage } from '../components/Event/RepeatMessage';
import { apiAddEvent, apiGetAllEvents, apiDeleteEvent, apiUpdateEvent, apiGetAllEventsPeriod } from '../api/event_api';
import { add } from 'date-fns';


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
     const [tasks, setTasks] = useState({});
     const [clickedDay, setClickedDay] = useState(null);


     async function myGetEvents(curr_date) {
          let moment_str = curr_date.clone()/*.subtract(1, 'month')*/.startOf('month');
          let moment_end = curr_date.clone()/*.add(1, 'month')*/.endOf('month');
          
          const m_format = 'YYYY-MM-DD[T]HH:mm:ss';
          let events2 = await apiGetAllEventsPeriod(moment_str.format(m_format),moment_end.format(m_format));

          console.log("get events", events2);
          let new_events = {};

          events2.forEach(ev => {
               const event_list = moment(ev.dateOfEvent).format('DDMMYYYY') in new_events ? new_events[moment(ev.dateOfEvent).format('DDMMYYYY')] : [];

               event_list.push(ev);
               new_events[moment(ev.dateOfEvent).format('DDMMYYYY')] = event_list;
          });
          setEvents(new_events);
     }



     const prevHandler = async() => {
          console.log('prev');
          setToday(prev => prev.clone().subtract(1, 'month'));
          
          await myGetEvents(today.clone().subtract(1, 'month'));
     };

     const nextHandler = async() => {
          console.log('next');
          setToday(prev => prev.clone().add(1, 'month'));

          await myGetEvents(today.clone().add(1, 'month'));
     };

     const [clickedToDoList, setClickToDoList] = useState(false);

     const showToDoList = () => {
          setClickToDoList(!clickedToDoList);

     }
     function getEvents() {
          return events;
     }
     
     async function addEvent(e) {
          await apiAddEvent(e);

          await myGetEvents(today);

          const event_list = moment(e.dateOfEvent).format('DDMMYYYY') in events ? events[moment(e.dateOfEvent).format('DDMMYYYY')] : [];
          event_list.push(e);
          setEvents({
               ...events,
               [moment(e.dateOfEvent).format('DDMMYYYY')]: event_list
          });
          console.log(events);
          if (e.hasOwnProperty('selectedRepeat') && e.selectedRepeat !== '' && e.selectedRepeat !== 'None') {
               setShowMessage(true);
          }
     }

     async function deleteEvent(id, date) {
          const ev_list = events[date];
          let i = ev_list.findIndex(ev => ev.event_id === id);
          
          await apiDeleteEvent(ev_list[i].orig_event_id);

          ev_list.splice(i, 1);
     }

     async function editEvent(id, date, newEvent) {
          newEvent.event_id = id;
          await apiUpdateEvent(newEvent);

          const ev_list = events[date];
          let i = ev_list.findIndex(ev => ev.event_id === id);

          const ev_date = moment(newEvent.dateOfEvent).format('DDMMYYYY');
          if (date != ev_date) {
               ev_list.splice(i, 1);
               const event_list = ev_date in events ? events[ev_date] : [];
               event_list.push(newEvent);
               setEvents({
                    ...events,
                    [ev_date]: event_list
               });
          } else {
               Object.assign(ev_list[i], newEvent);
          }
     }


     const editStatus = (a) => {
          setActivateEdit(a);

     }

     const delStatus = (a) => {
          setActivateDel(a);

     }
     
     useEffect(() => async () => {
          console.log("useEffect");
          await myGetEvents(today);
     }, []);

     function addTask(e) {
          const task_list = moment(e.dateOfTask).format('DDMMYYYY') in tasks ? tasks[moment(e.dateOfTask).format('DDMMYYYY')] : [];
          task_list.push(e);
          setTasks({
               ...tasks,
               [moment(e.dateOfTask).format('DDMMYYYY')]: task_list
          });
          console.log(tasks);
     }
     
     const handleCheck = (id) =>{
          const listTasks = tasks[clickedDay].map((task) => task.id === id ? {...task, checked: !task.checked } : task);
          setTasks({
               ...tasks,
               [clickedDay]:listTasks
          })
        }

     return (
          <div >
               <RepeatMessage showMessage={showMessage} setShowMessage={setShowMessage} />
               <DailyToDoList
                    clickedToDoList={clickedToDoList}
                    showToDoList={showToDoList} 
                    //handleCheck={handleCheck} 
                    tasks={'19122022' in tasks ? tasks['19122022']:[]}
                    />
               <div style={{ 'margin': '10% 2% 0 20%' }}>

                    <MonthCalendarHeader
                         events={getEvents}
                         today={today}
                         prevHandler={prevHandler}
                         nextHandler={nextHandler}
                         currCalendar="month"
                         addEvent={addEvent}
                         addTask={addTask}
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
                         clickedDay={clickedDay}
                         setClickedDay={setClickedDay}
                         setCurrEvent={setCurrEvent}
                         setCurrEvDate={setCurrEvDate}

                    />
               </div>
          </div>

     )
};
export { MonthCalendar };
