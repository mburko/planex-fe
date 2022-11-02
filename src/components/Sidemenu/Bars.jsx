import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Bars = (props) => {
    return (

        <FaBars
            size={40}
            className="sidebar_main_icon"
            onClick={props.showSidebar}
        />

    )
}

