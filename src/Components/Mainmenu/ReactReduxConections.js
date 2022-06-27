import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmpAction from './../../actions/EmpAction'  //extrnal data -API
import UsersAction from './../../actions/UsersAction'
import StudentsAction from './../../actions/StudentsAction'
import { bindActionCreators } from 'redux';
 class ReactReduxConections extends Component {

    constructor(props)
    {
        super(props);
        this.state={}
    }
    componentDidMount()
    {
        this.props.EmpAction();
        this.props.UsersAction();
        this.props.StudentsAction();
    }
  render() {
    return (
      <>
        <div className="container p-5">
             <h2 className='text-center'>ReactReduxConections</h2>

              <h3>Synconus data from the react_redux action</h3>

             {
                this.props.Empdata.map((res,i)=>
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
                this.props.Userdata.map((res,i)=>
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
                this.props.Studentsdata.map((res,i)=>
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

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConections)