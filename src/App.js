import {useState} from 'react'
import './App.css';

function App() {
  const [mail, setMail] = useState("");
  const [errorMail, setErrorMail] = useState("");

  function saveMail(event){
    setMail(event.target.value)
  }

  function comprobarMail(){
    setErrorMail(mail.includes("@") ? <p>Valid email address!</p> : <p>Invalid email address entered!</p>)
  }
    return (
    <div className="App">
        <h1>Your mail</h1>
        <input type="text" onChange={saveMail} value={mail}/>
        <button onClick={comprobarMail}>Submit</button>
        {errorMail}
    </div>
  );
}

export default App;
