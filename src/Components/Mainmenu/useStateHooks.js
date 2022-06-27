import { React,useState } from 'react'

export default (props) => {

    var [stateEmail, setStateEmail] = useState("javeed@gmail.com");

    let handleStateEmail = () => {
        setStateEmail("javeedbasha@gmail.com");
    }
    return(<>
       <div className="container p-5">
       <h1>React hooks Usestate</h1>
       {stateEmail}

       <button onClick={handleStateEmail}>Update Email</button>
       </div>
      

    </>)
}