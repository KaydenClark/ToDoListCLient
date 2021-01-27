import React from 'react'
import {
    useHistory,
} from "react-router-dom";
import { AuthContext } from '../context/auth-context'
import '../styles/Login.css'

export const Login = () => {
    let history = useHistory();
    
    let login = (event, contextFunc) => {
        event.preventDefault()
        contextFunc(() => {
            history.goBack();
        });
    };
    
    return (
        <AuthContext.Consumer>
            {({ authenticate }) =>(
            <div  className= "loginForm">
                <h1> Login </h1>
                <form onSubmit={(event) => login(event, authenticate)}>
                    <input id= "username" type="text" placeholder="Username" />
                    <input id= "password" type="password" placeholder="Password" />
                    <input type="submit" value= "Sign In" />
                </form>
            </div>
                )
            }
        </AuthContext.Consumer>
    )
}