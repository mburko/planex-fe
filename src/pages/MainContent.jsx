import React, { useState, useEffect } from 'react'
import { Home } from '../pages/Home';
import { MonthCalendar } from '../pages/MonthCalendar';
import { WeeklyCalendar } from '../pages/WeeklyCalendar';
import { Settings } from '../Settings'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Sidebar } from '../components/Sidemenu/Sidebar';
import { Header } from '../components/Header/Header';
import { WeeklyToDoList } from './WeeklyToDoList';
import AxiosClient from '../utilities/AxiosClient';
import '../components/Header/Logo.css';
import '../components/Header/Header.css';
import '../components/Header/UserBlock.css';
import '../components/Sidemenu/Sidebar.css';
import { RedirectToHome } from './RedirectToHome';



export const MainContent = (props) => {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => async () => {
        let response = await AxiosClient.get("/user", {});
        if (response.status === 200) {
            console.log(response);
            setUserInfo(response.data);
        }
        else {
            console.log(response);
        }
    }, []);

    const [clickedSidebar, setClickSidebar] = useState(false);
    const [clickedExit, setClickedExit] = useState(false);

    const showSidebar = () => {
        setClickSidebar(!clickedSidebar);

    }
    const exit = async () => {
        await AxiosClient.get("/logout", {});
        setUserInfo({});
        setClickedExit(!clickedExit);
    }


    function getUserName() {
        return userInfo['username'];
    }
    function getLogin() {
        return userInfo['login'];
    }
    function getEmail() {
        return userInfo['email'];
    }



    return (

        <>
            <BrowserRouter >

                {!window.location.pathname.includes('/home') ?

                    <Header
                        userName={getUserName()}
                        className={clickedExit ? "hidden_Header" : "Header"}
                        exit={exit}
                        showSidebar={showSidebar} />
                    : null}
                <Sidebar
                    login={getLogin()}
                    email={getEmail()}
                    exit={exit} clickedSidebar={clickedSidebar} showSidebar={showSidebar} />
                <Routes >
                    <Route path='/monthcalendar' element={<MonthCalendar />} />
                    <Route path="/weekcalendar" element={ <WeeklyCalendar />} />
                    <Route path='/tasks' element={<WeeklyToDoList />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<RedirectToHome />} />
                </Routes>
            </BrowserRouter>

        </>
    )


}




