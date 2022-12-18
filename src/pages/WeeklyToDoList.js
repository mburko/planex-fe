import { WeeklyToDoListTable } from "../components/WeeklyToDoList/WToDoListTable";
import { MonthCalendarHeader } from "../components/MonthCalendar/MonthCalendarHeader";
import { useState } from "react";
import moment from "moment";





const WeeklyToDoList = () => {

     moment.updateLocale('en', {week:{dow:1}});
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [tasks, setTasks] = useState({});
     const [activateDel, setActivateDel] = useState(false);
     const [activateEdit, setActivateEdit] = useState(false);
     const [currTask, setCurrTask]=useState(null);
    
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
   function addTask(e) {
        const task_list = moment(e.dateOfTask).format('DDMMYYYY') in tasks ? tasks[moment(e.dateOfTask).format('DDMMYYYY')] : [];
        task_list.push(e);
        setTasks({
             ...tasks,
             [moment(e.dateOfTask).format('DDMMYYYY')]: task_list
        });
       
   }

  
   const handleCheck = (id, date) =>{
     const listTasks = tasks[date].map((task) => task.id === id ? {...task, checked: !task.checked } : task);
     setTasks({
          ...tasks,
          [date]:listTasks
     })
     
   }

     const editStatus = (a) => {
          setActivateEdit(a);

     }

     const delStatus = (a) => {
          setActivateDel(a);

     }

   
     return (
       <div style={{ 'margin-top':'10%'}}> 
       {console.log(currTask)}
                  <MonthCalendarHeader
                       today={today} 
                       prevHandler={prevHandler} 
                       nextHandler={nextHandler}
                       currCalendar="week"
                       addTask={addTask}
                       />
                       
                  <WeeklyToDoListTable
                       tasks={getTasks}
                       handleCheck={handleCheck}
                       today={today}
                       startDay={startDay}
                       currTask={currTask}
                       setCurrTask={setCurrTask}
                       editStatus={(a) => editStatus(a)}
                       delStatus={(a) => delStatus(a)}/> 
       </div>
   
     )
   
}; 


export { WeeklyToDoList };
