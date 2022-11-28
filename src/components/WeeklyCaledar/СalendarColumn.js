import './CalendarColumn.css'
<link rel="stylesheet" type="text/css" href="C:\Users\ACER\planex\src\CalendarColumn.css"></link>



const СalendarColumn = (props) => {
  return (
    <div class = 'columnC'>
        <h1 class='columnTitle' onClick={props.clickedToDoList ? 'None' :  props.showToDoList}>
          {props.weekday}
          <p>
          {props.daynum}
          </p>
        </h1>
    </div>
  )
}


export default СalendarColumn;