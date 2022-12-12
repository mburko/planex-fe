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
import AxiosClient from '../utilities/AxiosClient';
import '../components/Header/Logo.css';
import '../components/Header/Header.css';
import '../components/Header/UserBlock.css';
import '../components/Sidemenu/Sidebar.css';
import { RedirectToHome } from './RedirectToHome';


export const MainContent = () => {


    const [clickedSidebar, setClickSidebar] = useState(false);
    const [clickedExit, setClickedExit] = useState(false);

    const showSidebar = () => {
        setClickSidebar(!clickedSidebar);

    }
    const exit = () => {
        setClickedExit(!clickedExit);
    }


    function getUserName() {
        AxiosClient.get("/info", {

        }).then((response) => {
            console.log(response);
            let userInfo = response.data['username'];
            return userInfo;
        })
            .catch((error) => {
                console.log(error);
            });

        console.log("username");


    }

    function getEmail() {
        AxiosClient.get("/info", {

        }).then((response) => {
            console.log(response);
            let userInfo = response.data['email'];
            return userInfo;
        })
            .catch((error) => {
                console.log(error);
            });

        console.log("email");


    }



    return (

        <>
            <BrowserRouter >

                {!window.location.pathname.includes('/home') ?

                    <Header
                        userName={getUserName}
                        className={clickedExit ? "hidden_Header" : "Header"}
                        exit={exit}
                        showSidebar={showSidebar} />
                    : null}
                <Sidebar
                    login={getUserName}
                    email={getEmail}
                    exit={exit} clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
                <Routes >
                    <Route path='/monthcalendar' element={<MonthCalendar />} />
                    <Route path="/weekcalendar" element={<WeeklyCalendar />} />
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<RedirectToHome />} />
                </Routes>
            </BrowserRouter>

        </>
    )


}




