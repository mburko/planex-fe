import React from 'react'
import './Event.css'
import { useEffect, useState } from 'react';

export const Event = (props) => {
    const [showFullEvent, setShowFullEvent] = useState(false);
    const [showEventName, setShowEventName] = useState(false);
    const [showEvent, setShowEvent] = useState(true);



    function ellipsify(str) {
        if (str.length > 10) {
            return (str.substring(0, 10) + "...");
        }
        else {
            return str;
        }
    }
    return (<>
        <div className={`Event ${showEvent ? "" : "Event_hidden"}`}
            style={{ 'height': `${props.height}px`, 'top': `${props.top}px`, 'cursor': 'pointer' }}
            onMouseEnter={() => setShowEventName(true)}
            onMouseLeave={() => setShowEventName(false)}
            onClick={() => { setShowFullEvent(true); setShowEventName(false); setShowEvent(false) }}


        >
            <div className={`show_name_event name_event_transition ${showEventName ? "" : "hide_event_name"} `}
                onMouseEnter={() => setShowEventName(true)}
            >{ellipsify(props.ev_name)}</div>
        </div>
        <div
            className={`full_info_wc_event wc_event_transition ${showFullEvent ? "" : "full_info_wc_event_hidden"}`}
            style={{
                'top': `${props.top + props.height / 2}px`,
            }}
            onClick={() => { setShowFullEvent(false); setShowEvent(true) }}
        >
            <div className="full_info_event_text">
                <div className="full_info_event_evname">{props.ev_name}</div>
                <div className="full_info_event_notes">{props.notes}</div>
                <div className="full_info_event_time">{props.time_from} - {props.time_to}</div>
            </div>
        </div>
    </>
    )
}

