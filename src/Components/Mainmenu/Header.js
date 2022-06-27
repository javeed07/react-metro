import React from 'react'
import { Link,NavLink } from 'react-router-dom';
function Header() {
  var MenuNames=["Home","About","Services","Contact","Itservices","Myclass","Lifecycle","Restapi","localapi","portfolio","rb","signup","RHusestate","RHuseEffect","RHPagination","HooksUser" ,"Hooksredux","rrc"]
    return (
        <>
            <nav className="navbar navbar-expand-lg Navbar-light bg-warning">    
  <div className="container-fluid">
    <a className="navbar-brand" to="#">JS Restro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" activeClassName='text-danger' to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" activeClassName='text-danger'  to="/about">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" activeClassName='text-danger'  to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" activeClassName='text-danger'  to="/contact">Contact</NavLink>
        </li>
      </ul> */}

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {
        MenuNames.map((data,i) =>
         <li className="nav-item" key={i}>
          <NavLink className="nav-link active" aria-current="page" activeClassName='text-danger' to={`/${data.toLocaleLowerCase()}`}>{data}</NavLink>
        </li>)
      }
      </ul>
     
    </div>
  </div>
</nav>
        </>
           
      
    )
}
export default Header;