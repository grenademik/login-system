import './App.css';
import { useState } from 'react';

function App() {
  const username="admin";
  const password="admin";
  const [state,setState] = useState([]);
  
  const authentication = (user, pass) => {
    if(user===username && pass===password){
    return setState("Login Sucess");
    } else {
      return setState("Failed");
    }
  } 

  return (
  <div className="login-card">
    <Apptitle/>
      <form>
       <Form checkAuth={authentication}/>
       
      </form>
      <p>STATUS:{state}</p>
  </div>
  );
}

function Apptitle(){
  return (<div>
  <h1>Login Form</h1>
  </div>
  );
}

function Form({checkAuth}){
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const handleUser = (event) =>{
    const userValue= event.target.value;
    setUser((_) =>userValue)
  }
  const handlePass = (event) =>{
    const passValue= event.target.value;
    setPass((_) =>passValue)
  }

  const auth = () => {
    checkAuth(user,pass);
  }
  return(<>
    <label>
    Username:
    <input onChange={handleUser} value={user}/>
  </label><br/>
  <label>
          Password:
          <input type="password" onChange={handlePass}/>
        </label><br/>
  <button onClick={auth}>Submit</button>
  </>
  );
}


export default App;
