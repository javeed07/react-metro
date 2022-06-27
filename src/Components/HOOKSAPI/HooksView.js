import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//global
var idno;

export default (props) => {

    var [userData, setStateuseData] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    });
    let { idno } = useParams();
     let { id, name, email, phone } = userData

     useEffect(()=>{
        const url = `http://localhost:3001/users/${idno}`

        axios.get(url).then((result) => setStateuseData(result.data));
     },[])
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
        <Link className="btn btn-success" to="/HookUser">GO TO BACK</Link>
      </div>
    </>)
  }

  


