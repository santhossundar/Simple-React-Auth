import React, { useContext } from 'react'
import SampleContext from './Context/SampleContext'

function Login() {
    const {isLoggedIn, setIsLoggedIn} = useContext(SampleContext);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h1>Login here ...</h1>
            <button onClick={() => {handleLogin()}}>LogIn</button>
        </div>
    )
}

export default Login
