import './App.css';
import {useContext, useState} from 'react'
import SampleContext from './Context/SampleContext'
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const {isLoggedIn, setIsLoggedIn} = useContext(SampleContext);
  const [loginBtn, setLoginBtn] = useState("Login");
  const [loginTitle, setLogintitle] = useState("Login here ...");

  return (
      <div className="App">
        {isLoggedIn?<Dashboard/>:<Login/>}
      </div>
  );
}

export default App;
