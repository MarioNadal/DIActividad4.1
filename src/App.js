import {useState} from 'react'
import './App.css';

function App() {
  const [mail, setMail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  function saveMail(event){
    setMail(event.target.value)
  }
  function comprobarMail(){
    mail.includes("@") ? setErrorMail(<p>Invalid email address entered!</p>) : setErrorMail(<p></p>)
  }
    return (
    <div className="App">
        <h1>Your mail</h1>
        <input type="text" onChange={saveMail} value={mail}/>
        <button onCLick={comprobarMail}>Submit</button>
        {errorMail}
    </div>
  );
}

export default App;
