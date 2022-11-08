import React, { useState, useRoutes } from 'react'

import { Home } from '../pages/Home';
import { MonthCalendar } from '../pages/MonthCalendar';
import { WeeklyCalendar } from '../pages/WeeklyCalendar';
import { MyTask } from '../components/DailyToDoList/MyTask';
import { Settings } from '../Settings'
import { Route, Routes, BrowserRouter, withRouter, Navigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidemenu/Sidebar';
import { Header } from '../components/Header/Header';
import { Tasks } from '../Tasks';
import '../components/Header/Logo.css';
import '../components/Header/Header.css';
import '../components/Header/UserBlock.css';
import '../components/Sidemenu/Sidebar.css';


export const MainContent = (props) => {


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
                    <Route path='/monthcalendar' element={<MonthCalendar />} />
                    <Route path="/weekcalendar" element={<WeeklyCalendar />} />
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/home' element={<Home />} /> 
                    <Route path="/" element={<Navigate to="/weekcalendar" />} />
                </Routes>
            </BrowserRouter>
        </>
    )


}




