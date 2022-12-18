import './MyTask.css'

const MyTask = (props) => {
  return (
      <li className={(props.task.selectedCategory==='High') ? "task-high" : (props.task.selectedCategory==='Middle') ? "task-medium" : "task-low" }
          key={props.task.id}
          onClick={() => {
              props.setCurrTask(props.task.id);}}>
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