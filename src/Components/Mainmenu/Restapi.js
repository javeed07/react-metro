import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//axios.get(url)


// GLOBAL VARIABLE FOR REASAPI _URL
const url =`https://jsonplaceholder.typicode.com/users`

class Restapi extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            UserData: [] , 
         //empty array
        }
        console.log(`!!!!!!!!!!!!!!!!!!!!!!!!! RESTAPI is  Mounting Method !!!!!!!!!!!!!!!!!!!!!!`)

    }
    getData = () =>{
        axios.get(url).then((result) => this.setState({ UserData: result.data }))
    }
    DeleteHandler = (id) =>
    {
      

     if(window.confirm(`Delete the Record numeris ${id} ? `))
     {
        axios.delete(`${url}/${id}`)

        this.getData()
     }
    }
    render() {
        return (<><div className='container p-5' >
            <h2 className='text-center'>Fetching  RESTAPI Data Using Global  URL/CLIENT </h2>
            <table className='table table-bordered table-info'>
                <thead className='table table-dark' >
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>WEBSITE</th>
                        <th>EMAIL</th>
                        <th colSpan={3} className='text-center'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.UserData.map((res, i) => {
                            return (<tr key={i}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.website}</td>
                                <td>{res.email}</td>
                                <td >
                                    <Link to={`/restapi/view/${res.id}`} className='btn btn-success'>view</Link>
                                </td>
                                <td>
                                <Link to={`/restapi/edit/${res.id}`} className='btn btn-warning'>Edit</Link>
                                </td>
                                <td>
                                <button onClick={()=>this.DeleteHandler(res.id)} className='btn btn-danger'>delete</button>
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </table>
           

           
        </div></>)
    }
    componentDidMount() {
         this.getData()
      
    }

}

export default Restapi