import { WeeklyToDoListTable } from "../components/WeeklyToDoList/WToDoListTable";
import { MonthCalendarHeader } from "../components/MonthCalendar/MonthCalendarHeader";
import { useState, useEffect } from "react";
import { apiAddTask, apiDeleteTask, apiGetAllTasks, apiEditTask } from "../api/task_api";
import moment from "moment";





const WeeklyToDoList = () => {

     moment.updateLocale('en', {week:{dow:1}});
     const [today, setToday] = useState(moment());
     const startDay = today.clone().startOf('week');
     const [tasks, setTasks] = useState({});
     const [activateDel, setActivateDel] = useState(false);
     const [activateEdit, setActivateEdit] = useState(false);
     const [currTask, setCurrTask]=useState(null);
     const [currTaskDate, setCurrTaskDate]=useState(null);
    
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


     async function deleteTask(id, date) {
          
          const task_list = tasks[moment(date).format('DDMMYYYY')];
          console.log(currTaskDate)
          let i = task_list.findIndex(task => task.id === id);
          
          await apiDeleteTask(task_list[i]);

          task_list.splice(i, 1);
     }

     async function editEvent(id, date, newTask) {
          newTask.id = id;
          await apiEditTask(newTask);
          
          const t_list = tasks[moment(date).format('DDMMYYYY')];
          let i = t_list.findIndex(task => task.id === id);

          const t_date = moment(newTask.dateOfTask).format('DDMMYYYY');
          if (date != t_date) {
               t_list.splice(i, 1);
               const task_list = t_date in tasks ? tasks[t_date] : [];
               task_list.push(newTask);
               setEvents({
                    ...tasks,
                    [t_date]: task_list
               });
          } else {
               Object.assign(t_list[i], newTask);
          }


     }
  
     const handleCheck = async(id, date) => {

          let t = tasks[date].find(temp => temp.id === id);
          t.checked = !t.checked;
          await apiEditTask(t);
      
        };

     const editStatus = (a) => {
          setActivateEdit(a);

     }

     const delStatus = (a) => {
          setActivateDel(a);

     }

   
     return (
       <div style={{ 'margin-top':'10%'}}> 
                  <MonthCalendarHeader
                       today={today} 
                       prevHandler={prevHandler} 
                       nextHandler={nextHandler}
                       currCalendar="week"
                       addTask={addTask}
                       deleteTask={deleteTask}
                       currTask={currTask}
                       setCurrTask={setCurrTask}
                       currTaskDate={currTaskDate}
                       activateDel={activateDel}
                       activateEdit={activateEdit}
                       />
                       
                  <WeeklyToDoListTable
                       tasks={getTasks}
                       handleCheck={handleCheck}
                       today={today}
                       startDay={startDay}
                       currTask={currTask}
                       setCurrTask={setCurrTask}
                       setCurrTaskDate={setCurrTaskDate}
                       editStatus={(a) => editStatus(a)}
                       delStatus={(a) => delStatus(a)}/> 
       </div>
   
     )
   
}; 


export { WeeklyToDoList };
