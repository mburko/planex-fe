import React from 'react'
import './Event.css'
import { useState, useEffect } from 'react';

export const WeekEvent = (props) => {
    const [showFullEvent, setShowFullEvent] = useState(false);
    const [showEventName, setShowEventName] = useState(false);
    const [showEvent, setShowEvent] = useState(true);

    function checkDeadline(str) {
        if (str === "Deadline") {
            return true;
        }
        else {
            return false;
        }
    }

    function ellipsify(str) {
        if (str.length > 8) {
            return (str.substring(0, 10) + "...");
        }
        else {
            return str;
        }
    }
    useEffect(() => {
        if (props.id === props.currEvent) {
            setShowFullEvent(true);
            setShowEventName(false);
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

    return (<>
        <div className={`WeekEvent ${checkDeadline(props.category) ? "WeekEvent_deadline" : "WeekEvent_basic"} ${showEvent ? "" : "WeekEvent_hidden"}`}
            style={!checkDeadline(props.category) ?
                { 'height': `${(props.height < 8) ? 8 : props.height}px`, 'top': `${props.top}px` } : { 'height': "8px", 'top': `${props.top - 4}px` }}
            onMouseEnter={!checkDeadline(props.category) ? () => setShowEventName(true) : () => setShowEventName(false)}
            onMouseLeave={() => setShowEventName(false)}
            onClick={() => {
                props.setCurrEvent(props.id);
                props.dateOfClickedEvent();
            }}


        >
            {(props.height > 15) && <div className={`show_name_weekevent name_weekevent_transition ${showEventName ? "" : "hide_weekevent_name"} `}
                onMouseEnter={() => setShowEventName(true)}
            >{ellipsify(props.ev_name)}</div>}
        </div>
        <div
            className={`full_info_wc_event wc_event_transition ${checkDeadline(props.category) ? "wc_event_deadline" : "wc_event_basic"} ${showFullEvent ? "" : "full_info_wc_event_hidden"}`}
            style={!checkDeadline(props.category) ?
                { 'top': `${props.top + props.height / 2}px` } : { 'top': `${props.top}px` }}
            onClick={() => {
                props.setCurrEvent(null);
            }}
        >
            <div className="full_info_weekevent_text">
                <div className="full_info_weekevent_evname">{props.ev_name}</div>
                {!checkDeadline(props.category) && <div className="full_info_weekevent_notes">{props.notes}</div>}
                {!checkDeadline(props.category) && <div className="full_info_weekevent_time">{props.time_from} - {props.time_to}</div>}
            </div>
        </div>
    </>
    )
}

