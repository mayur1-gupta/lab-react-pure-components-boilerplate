import React from 'react'
import { Component } from 'react'
import { PureComponent } from 'react';
    
import React from 'react'

class PureComp extends PureComponent {
    constructor(props) {
      super(props);
       this.state = {
        value:0,
        Toggle :true
        }
    }
ChangeToggle=()=>{
    this.setstate({
        Toggle :! this.state.Toggle})
}
IncreaseCount=()=>{
    if(this.state.Toggle){
        this.setState({count: this.state.count + 1})
      }
}

    render() {
        console.log()
      return(
        <>
        <div>
            <h1>PureComp</h1>
            <button onClick={this.ChangeToggle}>Toggle</button>
            <button onClick={this.IncreaseCount}>Inc-Value</button>
        </div>
        </>
      )
      
    }
  }

export default PureComp


