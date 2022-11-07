import './CalendarColumn.css'
<link rel="stylesheet" type="text/css" href="C:\Users\ACER\planex\src\CalendarColumn.css"></link>


const Counter = () =>{
  console.log('ya zamahalas')
}

const СalendarColumn = (props) => {
  return (
    <div class = 'column'>
        <h1 class='columnTitle' onClick={props.showToDoList}>
          {props.weekday}
          <p>
             {props.daynum}
          </p>
        </h1>
    </div>
  )
}


export default СalendarColumn;