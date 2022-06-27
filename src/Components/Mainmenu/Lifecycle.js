import React, { Component } from 'react'

 class Lifecycle extends Component {
     constructor(props) {
         super(props);
         this.state = {}
         console.log(`constructor is  mounting method`)
     }
  render() {
    console.log(`render is  mounting method`)
    return (<>
      <div>
     <h2>REACT CLASS COMPONENT LIFE CYCLE PROCESS</h2>
      </div>
      </> )
  }
}
export default Lifecycle;