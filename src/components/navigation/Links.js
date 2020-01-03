import React from 'react'
import { Link } from "react-router-dom";

export const Links = () => {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>
                    <li>
                        <Link to= "/taskList">Task List</Link>
                    </li>
                </ul>
            </nav>
        </div>
        )
}