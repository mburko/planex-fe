import { React, useState } from 'react'
import "./HeaderChoice.css"
import { EventCreator } from '../Event/EventCreator'
import '../Event/EventCreator.css';
import { TaskCreator } from '../DailyToDoList/TaskCreator';

export const HeaderChoice = (props) => {

  const [clickedNewEvent, setClickedNewEvent] = useState(false);
  const [clickedNewTask, setClickedNewTask] = useState(false);



  return (
    <>
      <div className="pseudo_hd_choice"
      onMouseEnter={() => { props.setShowAdd(true); props.handleAdding(); }}
      onMouseLeave={() => { props.setShowAdd(false); props.handleAdding(); }}
      onClick={() => { props.setShowChoice(!props.state) }}
      >
        <div className={props.state ? "hd_choice" : "hd_choice_disabled"}>
          <div
            className="hd_choice_text"
            onClick={() => { setClickedNewEvent(true); setClickedNewTask(false) }}
          >
            Event
          </div>

          <div
            className="hd_choice_text"
            onClick={() => { setClickedNewTask(true); setClickedNewEvent(false) }}

          >Task</div>

        </div>
      </div>
      <EventCreator addEvent={props.addEvent} changeState={() => { setClickedNewEvent(false) }} clickedEvent={clickedNewEvent} />
      <TaskCreator changeState={() => { setClickedNewTask(false) }} clickedTask={clickedNewTask} />
    </>
  )
}

