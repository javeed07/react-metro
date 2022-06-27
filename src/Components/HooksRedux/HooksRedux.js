import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EmpAction from './../../actions/EmpAction'  //extrnal data -API
import UsersAction from './../../actions/UsersAction'
import StudentsAction from './../../actions/StudentsAction'
import { bindActionCreators } from 'redux';

      let HooksRedux=(props) => {

 
    useEffect(() =>{
        
            props.EmpAction();
            props.UsersAction();
            props.StudentsAction();
        
    },[])


    return (
      <>
        <div className="container p-5">
             <h2 className='text-center'>ReactReduxConections</h2>

              <h3>Synconus data from the react_redux action</h3>

             {
                props.Empdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>
                    )
                })
             }

             <h3>ASynconus data from [RESTAPI] the react_redux action</h3>

             {
                props.Userdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>
                    )
                })
             }
              
             <h3>ASynconus data from [RESTAPI] the react_redux action students</h3>
             
             {
                props.Studentsdata.map((res,i)=>
                {
                    return(
                        <ul key={i}>
                           <li>{res.id}</li>
                           <li>{res.name}</li>
                           <li>{res.email}</li>
                        </ul>
                    )
                })
             }
        </div>
      </>
    )
  }

const mapStateToProps = (state) => {
    console.log(state);
//get the data from the redux_store[state data] by using reducers[state objects]
    return({
        Empdata:state.EmpReducer,
        Userdata:state.UsersReducer,
        Studentsdata:state.StudentsReducer
    })
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ EmpAction,UsersAction, StudentsAction },dispatch)
    //calling redux action
}

//export default ReactReduxConnections -> normal react component export

export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)