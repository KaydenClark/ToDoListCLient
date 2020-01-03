import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";

import { AuthContext } from '../../context/auth-context'
 
function SignOut() {
    let history = useHistory();
    let context = useContext(AuthContext)

    return context.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button onClick={() => {context.signout(() => history.push("/"));}}>
                Sign out
            </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        );
}

export default SignOut;