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

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
  
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

                <div className="full_event_delete_button"
                        onMouseEnter={() => setShowDelete(true)}
                        onMouseLeave={() => setShowDelete(false)}
                    >

                        <div className={`event_delete_button_hover ${showDelete ? "event_delete_button_hover_active" : "event_delete_button_hover_closed"}`}>{
                            showDelete && <div style={{'padding-left':'20px'}}className="event_button_text">Delete</div>}</div>

                        
                        <RiDeleteBin5Line style={{ 'z-index': '10' }} size={40} color={'#C6AC8D'} id="event_delete_button" />
                    </div>

                    

                    <div className="full_event_edit_button"
                        onMouseEnter={() => setShowEdit(true)}
                        onMouseLeave={() => setShowEdit(false)}
                    >

                        <div className={`event_edit_button_hover ${showEdit ? "event_edit_button_hover_active" : "event_edit_button_hover_closed"}`}>{
                            showEdit && <div className="event_button_text">Edit</div>}</div>

                        <FiEdit style={{ 'z-index': '10' }} size={40} color={'#C6AC8D'} id="event_change_button" />

                    </div>
                    


                    <div className="full_event_add_button"
                        onMouseEnter={() => setShowAdd(true)}
                        onMouseLeave={() => setShowAdd(false)}
                    >

                        <div className={`event_add_button_hover ${showAdd ? "event_add_button_hover_active" : "event_add_button_hover_closed"}`}>{
                            showAdd && <div className="event_button_text">Add</div>}</div>

                        <AiFillPlusCircle style={{ 'z-index': '10' }} size={45} color={'#C6AC8D'} id="event_add_button" />


                    </div>
                </div>
            </div>

        </MonthHeader >
    );
};
export { MonthCalendarHeader };