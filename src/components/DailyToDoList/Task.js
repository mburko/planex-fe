import './Task.css'

const Task = (props) => {
  return (
      <li className="task" key={props.task.id}>
        <input
          type='checkbox'
          onChange={() => props.handleCheck(props.task.id)}
          checked={props.task.checked}
          class = 'custom-checkbox'/>
          
          <label
              style = {(props.task.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => props.handleCheck(props.task.id)}>
                {props.task.task}
          </label>
      </li>
  )
};


export { Task };