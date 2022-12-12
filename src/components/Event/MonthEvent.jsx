import React from 'react'
import './Event.css'
import { useState, useEffect } from 'react';

export const MonthEvent = (props) => {
    const [showFullEvent, setShowFullEvent] = useState(false);
    const [showEvent, setShowEvent] = useState(true);

    function checkDeadline(str) {
        if (str === "Deadline") {
            return true;
        }
        else {
            return false;
        }
    }

    useEffect(() => {
        if (props.id === props.currEvent) {
            setShowFullEvent(true);
            setShowEvent(false);
            props.editStatus(true);
            props.delStatus(true);
        }
        else {
            setShowFullEvent(false);
            setShowEvent(true);

        }
        if (props.currEvent === null) {
            props.editStatus(false);
            props.delStatus(false);
        }
    }, [props.currEvent])

    return (
        <>
            <div className={`MonthEvent ${checkDeadline(props.category) ? "MonthEvent_deadline" : "MonthEvent_basic"} ${showEvent ? "" : "MonthEvent_hidden"}`}
                style={{ 'top': `${props.top - 4}px`, 'minHeight': `${(props.height < 8) ? 8 : props.height}px` }}
                onClick={() => {
                    props.setCurrEvent(props.id);
                    props.dateOfClickedEvent();
                }}
            >

            </div>
            <div
                className={`full_info_mc_event mc_event_transition ${checkDeadline(props.category) ? "mc_event_deadline" : "mc_event_basic"} ${showFullEvent ? "" : "full_info_mc_event_hidden"}`}
                style={!checkDeadline(props.category) ?
                    { 'top': `${props.top + props.height / 2}px` } : { 'top': `${props.top}px` }}
                onClick={() => { props.setCurrEvent(null); }}
            >
                <div className="full_info_monthevent_text">
                    <div className="full_info_monthevent_evname">{props.ev_name}</div>
                    {!checkDeadline(props.category) && <div className="full_info_monthevent_time">{props.time_from} - {props.time_to}</div>}
                </div>
            </div>
        </>
    )
}

