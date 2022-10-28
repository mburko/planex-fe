import CalendarColumn from './СalendarColumn';
import './WeeklyCalendar.css'

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const day = ['3','4','5','6','7','8','9'];

function WeeklyCalendar() {
  
  return (
    <div class='week-calendar'>
      <div><CalendarColumn weekday = {week[0]} daynum = {day[0]} /></div>
      <div><CalendarColumn weekday = {week[1]} daynum = {day[1]} /></div>
      <div><CalendarColumn weekday = {week[2]} daynum = {day[2]} /></div>
      <div><CalendarColumn weekday = {week[3]} daynum = {day[3]} /></div>
      <div><CalendarColumn weekday = {week[4]} daynum = {day[4]} /></div>
      <div><CalendarColumn weekday = {week[5]} daynum = {day[5]} /></div>
      <div><CalendarColumn weekday = {week[6]} daynum = {day[6]} /></div>
    </div>
  );
}

export default WeeklyCalendar;