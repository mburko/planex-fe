import './MyTask.css'
import { useEffect, useState } from 'react';

const MyTask = (props) => {

  const [clickedTask, setClickedTask]=useState(false);

  useEffect(() => {

    if (props.task.id === props.currTask) {
        props.editStatus(true);
        props.delStatus(true);
    }
    if (props.currTask === null) {
        props.editStatus(false);
        props.delStatus(false);
    }
  }, [props.currTask])

  return (
      <li className={(props.task.selectedCategory==='High') ? "task-high" : (props.task.selectedCategory==='Middle') ? "task-medium" : "task-low" }
          key={props.task.id}
          onClick={() => {if(props.currTask===null){
              props.dateOfClickedTask()
              props.setCurrTask(props.task.id);}
              else{
                props.setCurrTask(null);
              }}}>
        <input
          type='checkbox'
          class="custom-checkbox" id={props.task.id}
          onChange={() => props.handleCheck(props.task.id, props.date)}
          checked={props.task.checked}
          />
          <label
              for={props.task.id}
              style = {(props.task.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => props.handleCheck(props.task.id, props.date)}>
             {props.task.task}
          </label>
      </li>
  )
};


export { MyTask };