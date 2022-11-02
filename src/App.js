import React, { useState } from 'react'

import Axios from 'axios';

import Home from './pages/Home';
import { MonthCalendar } from './pages/MonthCalendar';
import './components/Header/Logo.css';
import './components/Header/Header.css';
import './components/Header/UserBlock.css';
import './components/Sidemenu/Sidebar.css';
import './components/Event/EventCreator.css';
import './components/Validation/RegisterForms.css';


import { Header } from './components/Header/Header';
import { RegisterForms } from './components/Validation/RegisterForms';
import { MyTasks } from './MyTasks'
import { Settings } from './Settings'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidemenu/Sidebar';
import { EventCreator } from './components/Event/EventCreator';


function App() {

  const [clickedSidebar, setClickSidebar] = useState(false);

  const showSidebar = () => {
    setClickSidebar(!clickedSidebar);

  }
  return (
    <>
      <div className="App">
        
          <Header showSidebar={showSidebar} />
          <BrowserRouter>
            <Sidebar login="user" email="email" clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
            <Routes>
              <Route path='/mytasks' element={<MyTasks />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </BrowserRouter>
        
        {/* <RegisterForms /> */}
        {/* <EventCreator /> */}

        {/* <MonthCalendar /> */}

        {/* <Home /> */}



      </div>
    </>
  );
}

export default App;
