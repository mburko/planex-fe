import './CalendarColumn.css'
import { Event } from '../Event/Event';
import { useState } from 'react';



const СalendarColumn = (props, { onChange }) => {


  return (
    <div class='columnC'>

      <div className="wcp_events">
        {props.events.map((e) => (
          <Event
            top={(parseInt(e.time_from.split(':')[0]) - 8) * 65 + parseInt(e.time_from.split(':')[1]) / 60 * 65 + 156}
            height={(parseInt(e.time_to.split(':')[0]) - parseInt(e.time_from.split(':')[0])) * 65 + (parseInt(e.time_to.split(':')[1]) - parseInt(e.time_from.split(':')[1])) / 60 * 65}
            time_from={e.time_from}
            time_to={e.time_to}
            notes={e.notes}
            ev_name={e.event}
            />
            
        ))}
       
      </div>



      <h1 class='columnTitle' onClick={props.clickedToDoList ? 'None' : (props.showToDoList)}>
        {props.weekday}
        <p>
        {props.daynum}
        {props.date2}
        </p>
      </h1>
    </div>
  )
}


export default СalendarColumn;