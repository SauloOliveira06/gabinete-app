import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Ri from 'react-icons/ri';
import * as Bs from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Dropdown } from 'react-bootstrap';
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

                        {/* <Link to='#' >
                            <FaIcons.FaUserCircle style={{ fontSize: '22px', color: 'rgb(136,136,136)' }} />
                        </Link> */}

                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                <FaIcons.FaUserCircle style={{ fontSize: '22px', color: 'rgb(136,136,136)' }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu id='block-dropdown'>
                                <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ajuda</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/">Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

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
                <div className={`overlay ${sidebar ? 'visible' : ''}`} />
            </IconContext.Provider>
        </>
    );
}

export default Navbar;