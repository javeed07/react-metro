import React, { Component } from 'react'
import axios from 'axios';
 import { Link } from 'react-router-dom';

var idno;
export default class Edit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    idno = this.props.match.params.idno

    console.log(idno)
    var { id, name,email,phone } = this.state
    return (<>
       <div className="container p-5">
        <h2>Edit component page</h2>

        <form>
        <div className="mb-3">
        <label className="form-label">Id</label>
        <input type="email" className="form-control" value={id}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="email" className="form-control" value={name}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input type="email" className="form-control" value={phone}/>
      </div>

      <div className="mb-3">
      <Link className='btn btn-success' to="/restapi">Go to Back</Link>
      <button type="submit" className="btn btn-warning text-white" value="update">UPDATE</button>


      </div>
        </form>

       
       </div>
      </>)
  }
  componentDidMount() {
    const url = `http://localhost:3001/users/${idno}`
      axios.get(url).then((result) => this.setState(result.data));
   
}
}
