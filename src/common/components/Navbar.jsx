import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Ri from 'react-icons/ri';
import * as Bs from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import '../index.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar-dashboard'>
                    <div className='icon-bars'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} style={{ fontSize: '18px', color: 'rgb(136,136,136)' }} />
                        </Link>
                    </div>

                    <div className='icons-user'>
                        <Link to='#' >
                            <Bs.BsBell style={{ fontSize: '22px', color: 'rgb(136,136,136)' }} />
                        </Link>
                        <Link to='#' >
                            <FaIcons.FaUserCircle style={{ fontSize: '22px', color: 'rgb(136,136,136)' }} />
                        </Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <Bs.BsChevronLeft />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <ul className='nav-logout'>
                            <li className='nav-text'>
                                <Link to="/">
                                    <Ri.RiLogoutCircleLine style={{ fontSize: '22px' }} />
                                    <span>Sair</span>
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;