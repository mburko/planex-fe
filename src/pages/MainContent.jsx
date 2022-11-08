import React, { useState, useRoutes } from 'react'

import Home from './Home';
import { Header } from '../components/Header/Header';
import { MonthCalendar } from './MonthCalendar';
import { WeeklyCalendar } from './WeeklyCalendar';
import { Tasks } from '../Tasks'
import { Settings } from '../Settings'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidemenu/Sidebar';

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



