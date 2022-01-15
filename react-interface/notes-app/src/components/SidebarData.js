import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import axios from 'axios'


axios.get(`http://localhost:8080/api/subjects`)
.then(res => {
    const subjectsData = res.data;
    
});



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Labs',
        path: '/labs',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <AiIcons.AiFillBook/>,
        cName: 'nav-text'
    }
]
