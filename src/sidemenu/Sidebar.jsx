import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

export const Sidebar = () => {

    const [clicked, setClick] = useState(false);

    const showSidebar = () => {
        setClick(!clicked);

    }
    return (
        <>
            <div className="Sidebar">
                <Link to="#" className="menu">
                    <FaBars
                        size={40}
                        className="sidebar_main_icon"
                        onClick={showSidebar}
                    />
                </Link>

            </div>

            <nav className={clicked ? 'sidebar active' : 'sidebar'}>
                <div className="sidebar_items" onClick={showSidebar}>
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
        </>
    )
}

