import React, { useState } from 'react'
import { SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

export const Sidebar = (props) => {

    
    return (
        <>
            <div className="Sidebar">

                <nav className={props.clickedSidebar ? 'sidebar active' : 'sidebar'}>
                    <div className="sidebar_items" onClick={props.showSidebar}>
                        <div className='sidebar_toogle'>
                            <Link to="#" className="menu_bars">
                                <SlClose
                                    size={40}
                                    className="sidebar_close_icon" />
                            </Link>
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <div key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </nav>
            </div>
        </>
    )
}

