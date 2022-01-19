import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as Fi from 'react-icons/fi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard-administrativo',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Funcionários',
        path: '/funcionario',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Pautas',
        path: '/pautas',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <Fi.FiUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Suporte',
        path: '/suporte',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },

];