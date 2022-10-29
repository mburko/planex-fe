import React, { useState } from 'react'

import Axios from 'axios';
import './validation/RegisterForms.css';
import './header/Logo.css';
import './header/Header.css';
import './header/UserBlock.css';
import './sidemenu/Sidebar.css';

import { Header } from './header/Header';
import { RegisterForms } from './validation/RegisterForms';
import { MyTasks } from './MyTasks'
import { Settings } from './Settings'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Sidebar } from './sidemenu/Sidebar';
import WeeklyCalendar  from './weeklycalendar/WeeklyCalendar';
import DailyToDoList  from './dailytodo/DailyToDoList';
import { MonthCalendar } from './pages/MonthCalendar';
<<<<<<< HEAD
=======
import Home  from './pages/Home';
>>>>>>> 4f59089fdbbec110b32893c223974844d813a597

function App() {

  const [clickedSidebar, setClickSidebar] = useState(false);

  const showSidebar = () => {
    setClickSidebar(!clickedSidebar);

  }
  return (
      <div className="App">

        <Header showSidebar={showSidebar} />
        <BrowserRouter>
          <Sidebar login="user" email="email" clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
          <MonthCalendar/>
          <Routes>
            <Route path='/mytasks' element={<MyTasks />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/weeklycalendar' element={<WeeklyCalendar />} />
          </Routes>
        </BrowserRouter>

      </div>  

  );
}
export default App;
