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
          <Sidebar clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
          <Routes>
            <Route path='/mytasks' element={<MyTasks />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
        <RegisterForms />
      </div>
    </>
  );
}

export default App;
