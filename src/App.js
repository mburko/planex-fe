import React, { useState } from 'react'

import Axios from 'axios';

import Home from './pages/Home';
import { MonthCalendar } from './pages/MonthCalendar';
import { SidebarNVG } from './components/Sidemenu/SidebarNVG';
import './components/Event/EventCreator.css';
import './components/Validation/RegisterForms.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



import { RegisterForms } from './components/Validation/RegisterForms';
import { EventCreator } from './components/Event/EventCreator';


function App() {

  return (
    <>
      <div className="App">

        <SidebarNVG />

        

        {/* <RegisterForms /> */}
        {/* <EventCreator /> */}

        {/* <MonthCalendar /> */}

        {/* <Home /> */}



      </div>
    </>
  );
}

export default App;
