import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmpAction from '../../actions/EmpAction';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        this.props.EmpAction()
    }
    render() {
        return (<>
            <h2 className='text-center text-danger'>Contact Component</h2>
            <p className='para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea, ut voluptas sed est vitae hic velit, dolorum quas nobis placeat consequatur distinctio iure, minima omnis quidem ducimus dignissimos dicta voluptatum fugit. Minus reprehenderit quasi doloremque corrupti voluptatem atque quidem eos similique delectus saepe eveniet, quam quia, asperiores odio illo modi eius quis incidunt eligendi facere quaerat ex pariatur. Tempore debitis voluptate nesciunt deserunt nihil natus qui id ducimus dolor obcaecati praesentium ex beatae eveniet, voluptatum aliquid optio, atque ratione, veritatis assumenda illum? Odit id quae nam soluta repellendus ipsum, accusantium cupiditate magnam fuga. Ad deserunt vel quos obcaecati dignissimos voluptatum magnam officia qui, laborum, non fugit eius veritatis sapiente, corrupti veniam facere blanditiis suscipit sequi labore ratione fuga iusto. Harum praesentium earum deleniti eum dolores dolorem accusamus officia odit officiis, pariatur blanditiis libero nam quisquam perspiciatis esse, quibusdam minima a! Optio possimus eligendi exercitationem culpa minima quas temporibus labore dolorem doloribus?
            </p>

            <br /><br />

            {
                this.props.empinfo.map((result,i)=>
                {
                    return(
                        <ul key={i}>
                          <li>{result.id}</li>
                          <li>{result.name}</li>
                          <li>{result.email}</li>
                        </ul>
                    )
                })
            }
        </>

        )
    }
}

function mapStateToProps(state){
    return({
        empinfo:state.EmpReducer
    })

}
function mapDispatchToProps(dispatch){
     return bindActionCreators({EmpAction},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
