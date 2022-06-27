import React, { Component } from 'react'
import axios from 'axios'


const url=`http://localhost:3001/users`
export default class Signup extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            uname:' ',
            email:' ',
            phone:' '

        }

       
    }
    unameHandling=(e)=>
    {
        this.setState({ uname: e.target.value })
    }

    emailHandling=(e)=>
    {
        this.setState({ email: e.target.value })
    }

    phoneHandling=(e)=>
    {
        this.setState({ phone: e.target.value })
    }
     
    submitHandler=(e)=> // e.preventDefault();

   

    {
        var FormData=
        {
           'name':this.state.uname,
            'email':this.state.email,
            'phone':this.state.phone
        }
        alert(JSON.stringify(FormData) );

        axios.post(url,FormData)
        .then( () =>window.alert("submit"))
        .catch(() =>window.alert("error"));
      
    }
    render() {
        var {uname,email,phone}=this.state
        return (<>
            <div className="container w-50">
                <h4 className="py-3 text-center">User Registration</h4>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" 
                        value={uname}
                        onChange={()=>this.unameHandling.bind(this)} />
                        
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"  value={email}
                        onChange={()=>this.emailHandling.bind(this)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="number" className="form-control" value={phone}
                        onChange={()=>this.phoneHandling.bind(this)} />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </div>
                </form>
            </div>
        </>)
    }
}
