import React, { Component } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

//global variable for restapi url
const url=`http://localhost:3001/users` //array type of object
 class Localapi extends Component {

  constructor(props){
      super(props)
      this.state=
      {
         userdata:[]
      }
  }

  getData =() =>{
    axios.get(url).then((result)=> this.setState({ userdata: result.data}))
  }

  //delete the data
  DeleteHandler=(id)=> {
    
     if (window.confirm(`delete the record number is ${id}?`)){
         //delete the selected id record
        axios.delete(`${url}/${id}`)
        //fetch rest of the records after delete for display
        this.getData()
     }
  }

  render() {
    return (<>
      <div className="container p-5">
        <h3 class="text-center">FETCH RESTAPI DATA USING GLOBAL URL/CLIENTS</h3>
     
        <table className="table table-dark table-bordered">
            <thead className="table table-light">
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>phone</th>
                    <th colSpan="3" className="text-center">ACTION</th>
                </tr>
            </thead>
            
            
            <tbody>
            {
         this.state.userdata.map((res,i)=>
         {
            return(<tr key={i}>
             <td>{i+1}</td>
             <td>{res.name}</td>
             <td>{res.email}</td>
             <td>{res.phone}</td>
             <td>
                 <Link to={`/localapi/view/${res.id}`}  class="btn btn-primary">VIEW</Link>
             </td>
             <td>
                 <Link to={`/localapi/edit/${res.id}`} class="btn btn-warning">Edit</Link>
             </td>
             <td>
                 <button onClick={()=> this.DeleteHandler(res.id)} class="btn btn-danger">Delete</button>
             </td>
            </tr>)
         })
     }
            </tbody>



        </table>

     
     
     
     
      </div>
      </>)
  }

  //restapi calls
  componentDidMount()
  {
      axios.get(url).then((result)=> this.setState({userdata:result.data}));
  }
}
export default Localapi
