import React from 'react'
import Header from './Mainmenu/Header'
import Home from './Mainmenu/Home'
import About from './Mainmenu/About'
import Services from './Mainmenu/Services'
import Contact from './Mainmenu/Contact'
import Portfolio from './Mainmenu/Portfolio'
import Footer from './Footer'
// import Pagenotfound from './Pagenotfound'
import Itservices from './Mainmenu/Itservices'
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom'
import Myclass from './Mainmenu/Myclass'
import Lifecycle from './Mainmenu/Lifecycle'
import Restapi from './Mainmenu/Restapi'
import Localapi from './Mainmenu/Localapi'
import View from './Mainmenu/LOCALAPI/View'
import Edit from './Mainmenu/LOCALAPI/Edit'
import Signup from './Mainmenu/Signup'
import RHusestate from './Mainmenu/useStateHooks'
import RHuseEffect from './Mainmenu/useEffect'
import RHPagination from './Mainmenu/Pagination'
import HookUser from './HOOKSAPI/HooksUser'

import Reactbootstrap from './Mainmenu/Reactbootstrap'
import ReactReduxConections from './Mainmenu/ReactReduxConections'
import HooksView from './HOOKSAPI/HooksView'
import HooksEdit from './HOOKSAPI/HooksEdit'
import HooksRedux from './HooksRedux/HooksRedux'
function App() {


  return (<>

    <BrowserRouter>



      {/* <Switch> */}
      {/* <Home /> */}
      <Header />
      <Route path="/home" component={Home} />

      {/* <About /> */}
      <Route path="/about" component={About} />

      {/* <Services/> */}
      <Route path="/services" component={Services} />


      {/* <Portfolio/> */}
      <Route path="/portfolio" component={Portfolio} />
      {/* 
      <Contact/> */}
      <Route path="/contact" component={Contact} />

      {/* <Itservices/> */}
      <Route path="/Itservices" component={Itservices} />

      {/* <Myclass/> */}
      <Route path="/myclass" component={Myclass} />

      {/* <Lifecycle/> */}
      <Route path="/lifecycle" component={Lifecycle} />

      {/* <Reactbootstrap/> */}
      <Route exact path="/rb" component={Reactbootstrap} />

      {/* <Signup/> */}
      <Route exact path="/signup" component={Signup} />

      {/* <RHusestate/> */}
      <Route exact path="/RHusestate" component={RHusestate} />

      {/* <RHuseEffect/> */}
      <Route exact path="/RHuseEffect" component={RHuseEffect} />

      {/* <RHPagination/> */}
      <Route exact path="/RHPagination" component={RHPagination} />

      {/* <HookUser/> */}
      <Route exact path="/HookUser" component={HookUser} />
      <Route exact path="/HookUser/View/:idno" component={HooksView} />
      <Route exact path="/HookUser/edit/:idno" component={HooksEdit} />

      {/* <ReactReduxConections/> */}
      <Route exact path="/rrc" component={ReactReduxConections} />

         {/* <ReactReduxConections/> */}
         <Route exact path="/Hooksredux" component={HooksRedux} />

      {/* <Restapi/> */}
      <Route exact path="/restapi" component={Restapi} />

      {/* <Localapi/> */}
      <Route exact path="/localapi" component={Localapi} />

      {/* <view/> with router parameter */}
      <Route exact path="/localapi/view/:idno" component={View} />

      {/* <Edit/> with router parameter */}
      <Route exact path="/localapi/edit" component={Edit} />

      {/* <Route component={Pagenotfound} /> */}


      <Redirect to="/home" />
      {/* <Pagenotfound/>  */}



      {/* </Switch> */}
      <Footer />

    </BrowserRouter>

  </>
  )
}
export default App;

