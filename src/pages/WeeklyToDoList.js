import { WeeklyToDoListTable } from "../components/WeeklyToDoList/WToDoListTable";
import { MonthCalendarHeader } from "../components/MonthCalendar/MonthCalendarHeader";
import { useState, useEffect } from "react";
import moment from "moment";
import { RepeatMessage } from '../components/Event/RepeatMessage';
import { AllocationMessage } from '../components/DailyToDoList/AllocationMessage';



const WeeklyToDoList = () => {

     moment.updateLocale('en', { week: { dow: 1 } });
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [tasks, setTasks] = useState({});
     const [showAllocationMessage, setShowAllocationMessage] = useState(false);

     const prevHandler = () => {
          console.log('prev');
          setToday(prev => prev.clone().subtract(1, 'week'))
     }
     const nextHandler = () => {
          console.log('next');
          setToday(prev => prev.clone().add(1, 'week'))
     };

     function getTasks() {
          return tasks;
     }

     const [tempTask, setTempTask] = useState({})
     function addTask(e) {
          const task_list = moment(e.dateOfTask).format('DDMMYYYY') in tasks ? tasks[moment(e.dateOfTask).format('DDMMYYYY')] : [];
          task_list.push(e);
          setTasks({
               ...tasks,
               [moment(e.dateOfTask).format('DDMMYYYY')]: task_list
          });
          console.log(tasks);
         
     }


     return (
          <div style={{ 'margin-top': '10%' }}>
               <AllocationMessage
                    text={'Your task will be auto allocated in available time before deadline'}
                    showMessage={showAllocationMessage}
                    setShowMessage={setShowAllocationMessage} />

               <MonthCalendarHeader
                    today={today}
                    prevHandler={prevHandler}
                    nextHandler={nextHandler}
                    currCalendar="week"
                    addTask={addTask}
                    setShowAllocationMessage={setShowAllocationMessage}
                    />

               <WeeklyToDoListTable
                    tasks={getTasks}
                    today={today}
                    startDay={startDay} />
          </div>

     )

};


export { WeeklyToDoList };
