import { WeeklyToDoListTable } from "../components/WeeklyToDoList/WToDoListTable";
import { MonthCalendarHeader } from "../components/MonthCalendar/MonthCalendarHeader";
import { useState, useEffect } from "react";
import { apiAddTask, apiDeletetask, apiGetAllTasks } from "../api/task_api";
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
   
   async function myGetTasks() {
     let tasks_temp = await apiGetAllTasks();

     console.log("get tasks", tasks_temp);
     let new_tasks = {};
     tasks_temp.forEach(tsk => {

          let task_list = moment(tsk.dateOfTask).format('DDMMYYYY') in new_tasks ? new_tasks[moment(tsk.dateOfTask).format('DDMMYYYY')] : [];

          task_list.push(tsk);
          new_tasks[moment(tsk.dateOfTask).format('DDMMYYYY')] = task_list;
     });

     // console.log("res new tasks", new_tasks);
     setTasks(new_tasks);

     
}

     const [tempTask, setTempTask] = useState({});
     async function addTask(e) {
          // console.log("task", e);
          await apiAddTask(e);
          await apiGetAllTasks();

          const task_list = moment(e.dateOfTask).format('DDMMYYYY') in tasks ? tasks[moment(e.dateOfTask).format('DDMMYYYY')] : [];
          task_list.push(e);
          setTasks({
               ...tasks,
               [moment(e.dateOfTask).format('DDMMYYYY')]: task_list
          });

          console.log(tasks);
     }

     useEffect(() => async () => {
          await myGetTasks();
     }, []);

  
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
