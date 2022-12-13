import CalendarColumn from './СalendarColumn';
import './WeeklyCalendar.css'
import moment from 'moment';
import { useState } from 'react';



const WeeklyCalendarTable = (props, { onChange }) => {

  const [date2, setDate]=useState('')
  const day = props.startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(7)].map(() => day.add(1, 'day').clone());
  const time = [];
  for (let i = 7; i <= 22; i++) {
    time.push(`${i}:00`);
  }

  const handleGetDate = (date2) => {
    setDate(date2)
  }
  const [tasks2, setTasks] = useState([
    {
      id: 1,
      checked: false,
      task: 'To walk the dog',
      date: '28-11-2022',
      priority: 2
    },
    {
      id: 2,
      checked: false,
      task: 'To go shopping',
      date: '29-11-2022',
      priority: 3
    },
    {
      id: 3,
      checked: false,
      task: 'To meet with someone',
      date: '29-11-2022',
      priority: 1
    },
    {
      id: 4,
      checked: false,
      task: 'To walk the dog',
      date: '30-11-2022',
      priority: 1
    },
    {
      id: 5,
      checked: false,
      task: 'To do a lab',
      date: '28-11-2022',
      priority: 2
    }
    ,
    {
      id: 6,
      checked: false,
      task: 'To walk the dog',
      date: '30-11-2022',
      priority: 1
    },
    ,
    {
      id: 7,
      checked: false,
      task: 'To walk the dog',
      date: '28-11-2022',
      priority: 1
    }
])

const handleCheck = (id) =>{
  const listTasks = tasks2.map((task) => task.id === id ? {...task, checked: !task.checked } : task);
  setTasks(listTasks);
}
 
  return (
    <div class='weekly-calendar'>
      <div className="wc_lines">
        {time.map((elem) => (
          <div className="time_line">{elem}</div>
        ))}


      </div>
      {
        daysArray.map((dayItem) => (
          <CalendarColumn
            events={dayItem.format('DDMMYYYY') in props.events() ? props.events()[dayItem.format('DDMMYYYY')] : []}
            clickedToDoList={props.clickedToDoList}
            showToDoList={props.showToDoList}
            key={dayItem.format('DDMMYYYY')}
            weekday={dayItem.format('dddd')}
            daynum={dayItem.format('D')}
            date = {dayItem.format('DD-MM-YYYY')}
            onClick={handleGetDate}
            date2={date2}
            tasks={tasks2}

          />
        )
        )
      }
      
    </div>


  )


}

export default WeeklyCalendarTable;