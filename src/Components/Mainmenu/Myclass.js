import React from 'react'

var Mobileno = 8074472115;
class Myclass extends React.Component
{

    id=1017;
    email="javeed@gmail.com"
    //constructor
    constructor(props){
        super(props)

        //state object initilization
        this.state =
        {
            email: "javeed@gmail.com"
        }
    }
    myfun()
    {
        return "this is own function";
    }
    render(){
        return(
            <>
               <div className="container">
               <h1>REACT CLASS COMPONENT & STATE & EVENTS</h1>
                {this.id}-{this.email}-{this.myfun()}-{Mobileno}
                <br />
                <br />
                {/* access state object properties from JSX */}
               <p>Email is: {this.state.email}</p> 
               {/* change state object data by setState() */}
               <button onClick={ () => this.setState({email: 'javeedshaik@gmail.com'})}>Change My Email</button>
               </div>
            </>
        )
    }
}
export default Myclass;