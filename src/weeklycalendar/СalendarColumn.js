import './CalendarColumn.css'
<link rel="stylesheet" type="text/css" href="C:\Users\ACER\planex\src\CalendarColumn.css"></link>


const СalendarColumn = ({weekday, daynum}) => {
  return (
    <div class = 'column'>
      <div class='columnTitle'>
      <h1 class='columnTitle'>
        {weekday}
      </h1>
      <h2 class='columnTitle'>
        {daynum}
      </h2>
      </div>
    </div>
  )
}


export default СalendarColumn