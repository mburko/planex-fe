import WeeklyCalendarTable from '../components/WeeklyCaledar/WeeklyCalendarTable';
import { DailyToDoList } from '../components/DailyToDoList/DailyToDoList';
import { useState, useEffect } from 'react';
import moment from "moment";
import '../components/WeeklyCaledar/WeeklyCalendar.css'
import AxiosClient from '../utilities/AxiosClient';
import { MonthCalendarHeader } from '../components/MonthCalendar/MonthCalendarHeader';
import { apiAddEvent, apiGetAllEvents, apiDeleteEvent, apiUpdateEvent, apiGetAllEventsPeriod } from '../api/event_api';
import { RepeatMessage } from '../components/Event/RepeatMessage';
import { AllocationMessage } from '../components/DailyToDoList/AllocationMessage';
import { RedirectToHome } from './RedirectToHome';
const WeeklyCalendar = () => {

     moment.updateLocale('en', { week: { dow: 1 } });
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [events, setEvents] = useState({});
     const [activateDel, setActivateDel] = useState(false);
     const [activateEdit, setActivateEdit] = useState(false);
     const [currEvent, setCurrEvent] = useState(null);
     const [currColumn, setCurrColumn] = useState(null);
     const [currEvDate, setCurrEvDate] = useState(null);
     const [showMessage, setShowMessage] = useState(false);
     const [tasks, setTasks] = useState({});
     const [showRepeatMessage, setShowRepeatMessage] = useState(false);
     const [showAllocationMessage, setShowAllocationMessage] = useState(false);
     const [access, setAccess] = useState(false);

    
     async function myGetEvents(curr_date) {
          let moment_str = curr_date.clone().startOf('week');
          let moment_end = curr_date.clone().endOf('week');
          
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



     const prevHandler = async () => {

          console.log('prev');
          setToday(prev => prev.clone().subtract(1, 'week'));

          await myGetEvents(today.clone().subtract(1, 'week'));
     }
     const nextHandler =async () => {
          console.log('next');
          setToday(prev => prev.clone().add(1, 'week'))

          await myGetEvents(today.clone().add(1, 'week'));
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
               setShowRepeatMessage(true);
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


     function getTasks() {
          return tasks;
     }

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
          const listTasks = tasks[currColumn].map((task) => task.id === id ? {...task, checked: !task.checked } : task);
          setTasks({
               ...tasks,
               [currColumn]:listTasks
          })
        }

     useEffect(() => {
          if (showRepeatMessage && showAllocationMessage) {
               setShowAllocationMessage(false);
          }
     }, [showRepeatMessage]);
     
     useEffect(() => {
          if (showRepeatMessage && showAllocationMessage) {
               setShowRepeatMessage(false);
          }
     }, [showAllocationMessage]);


     return (
          <>
            
                    <div className="weekly-calendar-page">
                         <RepeatMessage text={'Reload page to see all repeats'} showMessage={showRepeatMessage} setShowMessage={setShowRepeatMessage} />
                         <AllocationMessage text={'Your task will be auto allocated in available time before deadline '} showMessage={showAllocationMessage} setShowMessage={setShowAllocationMessage} />

                         <DailyToDoList
                              clickedToDoList={clickedToDoList}
                              showToDoList={showToDoList}
                              date={currColumn} />

                         <div style={{ 'margin': '10% 2% 0 20%' }}>
                              <MonthCalendarHeader
                                   events={getEvents}
                                   today={today}
                                   prevHandler={prevHandler}
                                   nextHandler={nextHandler}
                                   currCalendar="week"
                                   addEvent={addEvent}
                                   editEvent={editEvent}
                                   addTask={addTask}
                                   deleteEvent={deleteEvent}
                                   activateDel={activateDel}
                                   activateEdit={activateEdit}
                                   currEvent={currEvent}
                                   setCurrEvent={setCurrEvent}
                                   currEvDate={currEvDate}
                                   setShowAllocationMessage={setShowAllocationMessage}

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
                                   currColumn={currColumn}
                                   setCurrEvent={setCurrEvent}
                                   setCurrEvDate={setCurrEvDate}
                                   setCurrColumn={setCurrColumn}

                              />
                         </div>

                    </div>
                  
          </>
     )

};


export { WeeklyCalendar };

