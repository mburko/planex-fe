import React, { useState, useRoutes } from 'react'

import Home from '../../pages/Home';
import { Header } from '../Header/Header';
import { MonthCalendar } from '../../pages/MonthCalendar';
import { MyTasks } from '../../MyTasks'
import { Settings } from '../../Settings'
import { Route, Routes, BrowserRouter, withRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

import '../Header/Logo.css';
import '../Header/Header.css';
import '../Header/UserBlock.css';
import '../Sidemenu/Sidebar.css';

export const SidebarNVG = (props) => {


    const [clickedSidebar, setClickSidebar] = useState(false);
    const [clickedExit, setClickedExit] = useState(false);

    const showSidebar = () => {
        setClickSidebar(!clickedSidebar);

    }
    const exit = () => {
        setClickedExit(!clickedExit);
    }
    
    return (
        <>
            {!window.location.pathname.includes('/home') ?
                <Header className={clickedExit ? "hidden_Header" : "Header"}
                    exit={exit}
                    showSidebar={showSidebar} />
                : null}

            <BrowserRouter>
                <Sidebar login="user" email="email" exit={exit} clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
                <Routes>
                    <Route path='/mytasks' element={<MyTasks />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/mycalendar' element={<MonthCalendar />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
   

}




