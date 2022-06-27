import React from 'react'
import { BrowserRouter, Link,Route } from 'react-router-dom';
import WebApplication from './Itservices/WebApplication';
import HomeApplication from './Itservices/HomeApplication';
import Uiapplication from './Itservices/Uiapplication';
import Projectapplication from './Itservices/Projectapplication';
 var services=[
   {
     title:'Web Application',
     routeName: '/web-app'
   },
   {
    title:'Home Application',
    routeName: '/home-app'
  },
  {
    title:'ui Application',
    routeName: '/ui-app'
  },
  {
    title:'Project Application',
    routeName: '/project-app'
  }
 ]
 function Itservices() {
  return (
    <> 
      <BrowserRouter>
  <div className="container">
  <h1> Itservices</h1>
   <p>Freshservice. Freshservice is an ITIL-ready cloud service desk platform, meaning it is fully capable of providing full ITSM support at any scale to businesses of any type or size.
Zendesk. Zendesk is currently used by more than 40,000 organizations around the world, which makes it one of the leaders in the pack of help desk solutions.
Samanage. Samanage is powerful, fast, scalable and customizable. First of all, Samanage is fully compliant with the latest IT service management framework – the Information Technology Infrastructure Library (ITIL) – which means that per industry regulations it has the capability to provide robust support and all necessary features required by large enterprises for their ITSM operations.
</p>
      <div className="container my-5">
      <div className="row">
          <div className="col-lg-6">
          {/* <ul className="list-group">
  <li className="list-group-item">
  <Link to="/itservices/web-app">Web Application Services</Link>
  </li>
  <li className="list-group-item">
  <Link to="/itservices/home-app">Mobile Application Services</Link>
  </li>
  <li className="list-group-item">
  <Link to="/itservices/ui-app">UX-UI Design Service</Link>
  </li>
  <li className="list-group-item">
  <Link to="/itservices/project-app">Project Support Service</Link>
  </li>
  
</ul> */}

          <ul className="list-group">
            {
              services.map((data,i) =>{
                return( <li className="list-group-item">
  <Link to={`/itservices${data.routeName}`}>{data.title}</Link>
  </li>
                )
              })
            }
          </ul>
          </div>
          <div className="col-lg-6">
          
                {/* <WebApplication/> */}
                <Route exact path="/itservices/web-app" component={WebApplication}/>
                 {/* <HomeApplication/> */}
                <Route path="/itservices/home-app" component={HomeApplication}/>
                 {/* <Uiapplication/> */}
                <Route path="/itservices/ui-app" component={Uiapplication}/>
                {/* <Projectapplication/> */}
                <Route path="/itservices/project-app" component={Projectapplication}/>
              
           
          </div>
      </div>
      </div>
  </div>
  </BrowserRouter>
    </>
  )
}
export default Itservices;