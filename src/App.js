import React, { useState } from 'react'

import Axios from 'axios';

import Home from './pages/Home';
import { MonthCalendar } from './pages/MonthCalendar';
import { MainContent } from './pages/MainContent';
import './components/Event/EventCreator.css';
import './components/Validation/RegisterForms.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



import { RegisterForms } from './components/Validation/RegisterForms';
import { EventCreator } from './components/Event/EventCreator';
import { WeeklyCalendar }  from './pages/WeeklyCalendar';
import { DailyToDoList }  from './components/DailyToDoList/DailyToDoList';
import {Task} from './components/DailyToDoList/Task';

function App() {

  return (
      <div className="App">

        <MainContent />
        {/* <RegisterForms /> */}
        {/* <EventCreator /> */}

        {/* <DailyToDoList/> */}
        {/* <WeeklyCalendar/> */}
      </div>  

  );
}
export default App;
