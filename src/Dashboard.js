import React, {useContext} from 'react'
import SampleContext from './Context/SampleContext'

function Dashboard() {
    const {isLoggedIn, setIsLoggedIn} = useContext(SampleContext);

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h1>You are logged in ...</h1>
            <button onClick={() => {handleLogout()}}>Logout</button>
        </div>
    )
}

export default Dashboard