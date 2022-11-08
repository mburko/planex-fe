import React, { Component, useState } from 'react'
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';
import './HeaderButton.css'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'

const MonthHeader = styled('div')`
    display: flex;
    font-size: 200%;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    color: rgba(145,171,165, 1);
    margin: 2%;
    
    justify-content: space-between;
`;
const ButtonWrapper = styled('button')`
    border: none;
    outline: none;
    background-color: white;
    color: rgba(145,171,165, 1);
    cursor: pointer;
    margin-left: 5px;
    font-weight: 600;
    font-family: 'Quicksand', sans-serif;
    font-size: 100%;
`;
/*const ButtonWrapperEvent = styled('button')`
    border: none;
    outline: none;
    background-color: white;
    border-radius: 50%;
`;*/
const MonthCalendarHeader = ({ today, prevHandler, nextHandler, currCalendar }) => {

    let navigate = useNavigate();

    const toggleCalendar = () => {

        if (currCalendar === 'week') {
            navigate("/monthcalendar");
        }
        else if (currCalendar === 'month') {
            navigate("/weekcalendar");
        }

    }
    return (
        <MonthHeader >
            <div className="main_cal_header_div">
                <div className="cal_header_nvg">
                    <ButtonWrapper onClick={prevHandler}>{" < "}</ButtonWrapper>
                    <ButtonWrapper onClick={nextHandler}>{" > "}</ButtonWrapper>
                    <span style={{ 'cursor': 'pointer' }} onClick={toggleCalendar}>  {today.format('MMMM')}</span>
                    <span>  {today.format('YYYY')}</span>
                </div>
                <div className="div_header_button">
                    <RiDeleteBin5Line size={40} color={'#C6AC8D'} id="delete_button" />
                    <FiEdit size={40} color={'#C6AC8D'} id="change_button" />
                    <AiFillPlusCircle size={40} color={'#C6AC8D'} id="add_button" />

                </div>
            </div>

        </MonthHeader >
    );
};
export { MonthCalendarHeader };