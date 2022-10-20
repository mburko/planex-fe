import React, { useState } from 'react'
import Axios from 'axios';
import './validation/RegisterForms.css';
import './header/Logo.css';
import './header/Header.css';
import './header/UserBlock.css';
import './sidemenu/Sidebar.css';

import { MyTasks } from './MyTasks'
import { Settings } from './Settings'
import { Header } from './header/Header';
import { RegisterForms } from './validation/RegisterForms';
import { Sidebar } from './sidemenu/Sidebar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/mytasks' element={<MyTasks/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </BrowserRouter>



        {/* <Header />
      <RegisterForms /> */}
      </div>
    </>
  );
}

export default App;
