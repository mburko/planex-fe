import './MyTask.css'

const MyTask = (props) => {
  return (
      <li className={(props.task.priority===1) ? "task-high" : (props.task.priority===2) ? "task-medium" : "task-low" }
          key={props.task.id}>
        <input
          type='checkbox'
          class="custom-checkbox" id={props.task.id}
          onChange={() => props.handleCheck(props.task.id)}
          checked={props.task.checked}
          />
          <label
              for={props.task.id}
              style = {(props.task.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => props.handleCheck(props.task.id)}>
             {props.task.task}
          </label>
      </li>
  )
};


export { MyTask };