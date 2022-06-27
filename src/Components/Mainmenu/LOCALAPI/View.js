import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
//global
var idno;

export default class View extends Component {

  constructor(props) {
    super(props)

    this.state = {
        
    }
  }
  render() {
    const idno = this.props.match.params.idno
    //this.props-> history,location,match
    // console.log(idno)
    var { id,name,email,phone } =this.state
    return (<>
      <div className="container p-5">
        <h2>VIEW COMPONENT PAGE</h2>

        <p>{idno} th Record Data</p>
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
        <Link className="btn btn-success" to="/localapi">GO TO BACK</Link>
      </div>
    </>)
  }
  //restapi call
  componentDidMount() {
    const url = `http://localhost:3001/users/${idno}`
      axios.get(url).then((result) => this.setState(result.data));
   
}
}
