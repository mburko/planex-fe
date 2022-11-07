import React, { useEffect, useState, setState } from 'react'
import DatePicker from "react-datepicker"
import { TimePicker } from 'antd';
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import "react-datepicker/dist/react-datepicker.css";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";


const EVENT_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

export const EventCreator = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [showForm, setShowForm] = useState(true);
    const category = ['Birthday', 'Deadline', 'Work', 'Sport', 'Beauty'];

    const [inpEvent, setInpEvent] = useState(false);
    const [inpTime, setInpTime] = useState(false);
    const [inpDate, setInpDate] = useState(false);


    const [eventError, setEventError] = useState('Event can not be empty!');
    const [timeToError, setTimeToError] = useState(false);
    const [timeFromError, setTimeFromError] = useState(false);



    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (eventError || timeToError || timeFromError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [eventError, timeToError, timeFromError])

    const [newEvent, setState] = useState({
        event: '',
        notes: '',
        dateOfEvent: startDate,
        time_from: '',
        time_to: '',
        selectedCategory: '',

    });


    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'event':
                setInpEvent(true)
                break
            case 'time_from':
                setInpTime(true)
                break
            case 'time_to':
                setInpTime(true)
                break
            case 'dateOfEvent':
                setInpDate(true)

        }
    }


    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'event') {
            if (!EVENT_REGEX.test(e.target.value)) {
                setEventError('Event is not valid!');
                if (!e.target.value) {
                    setEventError('Event can not be empty!');
                }
            } else {
                setEventError('');
            }
        }
        if (e.target.name === 'dateOfEvent') {
            setStartDate(e);
        }

        console.log(value);

        if (e.target.name === 'time_from') {

            const hours = parseInt(value.split(':')[0]);
            const mins = parseInt(value.split(':')[1]) + hours * 60;
            const hoursT = parseInt(new Date().toLocaleTimeString('en-GB').split(':')[0]);
            const minsT = parseInt(new Date().toLocaleTimeString('en-GB').split(':')[1]) + hoursT * 60;

            if (minsT > mins && new Date().toDateString() === newEvent.dateOfEvent.toDateString()) {
                setTimeFromError(true);
            }
            else {
                setTimeFromError(false);
            }

        }
        if (e.target.name === 'time_to') {
            const hours = parseInt(value.split(':')[0]);
            const mins = parseInt(value.split(':')[1]) + hours * 60;
            const hoursF = parseInt(newEvent.time_from.split(':')[0]);
            const minsF = parseInt(newEvent.time_from.split(':')[1]) + hoursF * 60;
            if (minsF >= mins) {
                setTimeToError(true);
            }
            else {
                setTimeToError(false);
            }
        }

        setState({
            ...newEvent,
            [e.target.name]: value
        });

    }

    function handleForm(e) {
        e.preventDefault();
        console.log(newEvent);

    }



    const handleCancel = () => {
        setShowForm(false)
    }

    return (
        <div className="EventCreator">
            <div className={showForm === false ? "hidden_box" : "ev_creator_box"}>
                <p className="ev_creator_text">Event:</p>
                <div form="form_input">

                    <input
                        name="event"
                        type="text"
                        className={(inpEvent && eventError) ? "ev_creator_input_error" : "ev_creator_input_success"}
                        value={newEvent.event}
                        onChange={handleChange}
                        onBlur={blurHandle}

                    />
                    {(inpEvent && eventError) && <div className="ev_creator_message ev_input_error">{eventError}<BsFillXCircleFill className="ev_creator_error_icon" /></div>}
                </div>

                <p className="ev_creator_text">Notes:</p>
                <input
                    name="notes"
                    type="text"
                    className="ev_creator_input notes"
                    value={newEvent.notes}
                    onChange={handleChange}


                />

                <p className="ev_creator_text" >Date:</p>
                <DatePicker
                    name="dateOfEvent"
                    value={newEvent.dateOfEvent}
                    className="ev_creator_date"
                    minDate={new Date()}
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        newEvent.dateOfEvent = date;
                        if (date.toDateString() === new Date().toDateString()) {
                            const hours = parseInt(newEvent.time_from.split(':')[0]);
                            const mins = parseInt(newEvent.time_from.split(':')[1]) + hours * 60;
                            const hoursT = parseInt(new Date().toLocaleTimeString('en-GB').split(':')[0]);
                            const minsT = parseInt(new Date().toLocaleTimeString('en-GB').split(':')[1]) + hoursT * 60;
                            if (minsT > mins) {
                                setTimeFromError(true);
                            }

                        }
                        else {
                            setTimeFromError(false);
                        }
                    }}
                    onBlur={blurHandle}


                />

                <p className="ev_creator_text">Time:</p>

                <div className="div_from_to">
                    <div className="div_time">
                        <p className="ev_creator_text">From:</p>
                        <p className="ev_creator_text">To:</p>

                    </div>

                    <div className="div_time">
                        <input
                            name="time_from"
                            value={newEvent.time_from}
                            className={!timeFromError ? "ev_creator_time_success" : "ev_creator_time_error"}
                            type="time"
                            onChange={handleChange}
                            onBlur={blurHandle}


                        />
                        <input
                            name="time_to"
                            value={newEvent.time_to}
                            className={!timeToError ? "ev_creator_time_success" : "ev_creator_time_error"}
                            type="time"
                            onChange={handleChange}
                            onBlur={blurHandle}


                        />
                    </div>
                </div>

                <p className="ev_creator_text">Category:</p>
                <select
                    defaultValue=""
                    name="selectedCategory"
                    required className="ev_creator_category"
                    onChange={handleChange}
                >
                    <option value="" disabled selected hidden>Select</option>
                    {category.map((opt) =>
                        (<option value={opt}>{opt}</option>)

                    )}

                </select>

                <div className="div_option">
                    <p
                        className="ev_creator_text text_option"
                        onClick={() => handleCancel()}
                    >Cancel</p>

                    <p
                        className={formValid ? "ev_creator_text text_option" : "ev_creator_text"}
                        onClick={handleForm}
                    >OK</p>
                </div>


            </div>
        </div >
    )
}

