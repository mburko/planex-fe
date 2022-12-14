import React, { useEffect, useState, setState } from 'react'
import DatePicker from "react-datepicker"
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import "react-datepicker/dist/react-datepicker.css";

import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

import './TaskCreator.css'
import { ContentCutOutlined } from '@mui/icons-material';


const TASK_REGEX = /^[A-Za-z0-9_ ,.'`"()-;]{2,45}$/u;
///^[\p{L} ,.'-()]+$/u;
// /^[A-z][A-z0-9-_]{3,23}$/;

const NUMERIC = /^[0-9]+$/;


export const TaskCreator = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const category = ['High', 'Middle', 'Low'];

    const [inpTask, setInpTask] = useState(false);
    const [taskError, setTaskError] = useState('Task can not be empty!');

    const [formValid, setFormValid] = useState(false);
    const [hours, setHours] = useState('');
    const [mins, setMins] = useState('');
    const [newTask, setState] = useState({
        id: 34,
        task: '',
        dateOfTask: startDate,
        time_hours: '',
        time_mins: '',
        checked: false,
        selectedCategory: '',

    });
    useEffect(() => {
        console.log(newTask);
        if (taskError || !newTask.task || !newTask.selectedCategory) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
        console.log(formValid);
    }, [taskError, newTask])

   


    const blurHandle = (e) => {
        setInpTask(true);

    }

    useEffect(() => {
        if (newTask.time_hours === '1') {
            setHours('hour')
        }
        else {
            setHours('hours')

        }
        if (newTask.time_mins === '1') {
            setMins('minute')
        }
        else {
            setMins('minutes')

        }

    }, [newTask.time_hours, newTask.time_mins])

    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'task') {
            if (!TASK_REGEX.test(e.target.value)) {
                setTaskError('Task is not valid!');
                if (!e.target.value) {
                    setTaskError('Task can not be empty!');
                }
            } else {
                setTaskError('');
            }
        }
        if (e.target.name === 'dateOfTask') {
            setStartDate(e);
        }


        setState({
            ...newTask,
            [e.target.name]: value
        });

        

    }

    function handleForm(e) {
        e.preventDefault();

        // console.log(newTask);

        props.addTask(newTask)

        if (formValid) {
            handleCancel();
        }

    }



    const handleCancel = () => {
        props.changeState();
        setState({
            id: newTask.id+1,
            task: '',
            dateOfTask: startDate,
            time_hours: '',
            time_mins: '',
            selectedCategory: '',
            checked: false
        })
        setInpTask(false);
        setTaskError(false);

    }


    return (
        <div className="TaskCreator">
            <div className={props.clickedTask === false ? "hidden_box" : "task_creator_box"}>
                <p className="task_creator_text">Task:</p>
                <div form="form_input">

                    <input
                        name="task"
                        type="text"
                        className={(inpTask && taskError) ? "task_creator_input_error" : "task_creator_input_success"}
                        value={newTask.task}
                        onChange={handleChange}
                        onBlur={blurHandle}

                    />
                    {(inpTask && taskError) && <div className="task_creator_message task_input_error">{taskError}<BsFillXCircleFill className="task_creator_error_icon" /></div>}
                </div>


                <p className="task_creator_text" >Date:</p>
                <DatePicker
                    name="dateOfTask"
                    value={newTask.dateOfTask}
                    className="task_creator_date"
                    minDate={new Date()}
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        newTask.dateOfTask = date;
                    }}



                />

                <p className="task_creator_text">Allocated time:</p>
                <div className="overdiv_hours">
                    <input
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        placeholder='0'
                        name="time_hours"
                        value={newTask.time_hours}
                        className="task_creator_time_success"
                        type="number"
                        min="0"
                        onChange={handleChange}

                    />
                    <div className="task_creator_time_text">{hours}</div>
                </div>
                <div className="overdiv_mins">
                    <input
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        placeholder='0'
                        name="time_mins"
                        value={newTask.time_mins}
                        className="task_creator_time_success"
                        type="number"
                        min="0"
                        onChange={handleChange}

                    />
                    <div className="task_creator_time_text">{mins}</div>
                </div>


                <p className="task_creator_text">Priority:</p>
                <select
                    defaultValue=""
                    name="selectedCategory"
                    required className="task_creator_category"
                    onChange={handleChange}
                    value={newTask.selectedCategory}

                >
                    <option value="" disabled selected hidden>Select</option>
                    {category.map((opt) =>
                        (<option value={opt}>{opt}</option>)

                    )}

                </select>

                <div className="div_option">
                    <p
                        className="task_creator_text text_option"
                        onClick={handleCancel}
                    >Cancel</p>

                    <p
                        className={formValid ? "task_creator_text text_option" : "task_creator_text"}
                        onClick={handleForm}
                    >OK</p>
                </div>


            </div>
        </div >
    )
}

