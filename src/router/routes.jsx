import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import {Home} from "../pages/home/home"
import { Login } from '../pages/login/login'
import { AppLayout } from '../layout/app-layout'


export default [
    {
        component: <Login/>,
        id: nanoid(),
    },
    {
        component: <Home/>,
        path: "home",
        id: nanoid(),
    },
    {
        component: <AppLayout/>,
        path: "app",
        id: nanoid(),
    },
]
