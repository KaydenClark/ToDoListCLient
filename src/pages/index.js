import React from 'react'
import { Links } from '../components/navigation/Links'
import { Routes } from '../components/navigation/Routes'
import SignOut from '../components/navigation/SignOut'

export default () => {
     
    return (
        <div>
            <SignOut/>
            <Links/>
            <Routes/>
        </div>
    )
}