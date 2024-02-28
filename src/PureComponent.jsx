import React from 'react'
import { PureComponent } from 'react';
    

class PureComp extends PureComponent {
    constructor(props) {
      super(props);
       this.state = {
        count : 0,
        Toggle :false
        }
    }
ChangeToggle =()=>{
  this.setState((prevState) => ({
    Toggle: !prevState.Toggle
  }));
}

IncreaseCount=()=>{
    if(this.state.Toggle){this.setState({count: this.state.count + 1})
      }
}

handleToggle = () => {
  this.setState((prevState) => ({
    Toggle: !prevState.Toggle
  }));
};

componentDidMount() {
  console.log('This is Pure Component');
}

    render() {
        console.log('PureComponent')
      return(
        <>
        <div>
            <h1>PureComp</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.ChangeToggle}>Toggle</button>
            <button onClick={this.IncreaseCount}>Inc-Value</button>
        </div>
        </>
      )
      
    }
  }

export default PureComp




// import React,{PureComponent} from 'react';

// class PureCounterComponent extends PureComponent {
//    constructor(props) {
//      super(props)
   
//      this.state = {
//         count: 0,
//         Toggle:false
//      };
//    }
   
//    handleIncrement = () => {
//     if (this.state.Toggle) {
//       this.setState((prevState) => ({
//         count: prevState.count + 1
//       }));
//     }
//   };

//   handleToggle = () => {
//     this.setState((prevState) => ({
//       Toggle: !prevState.Toggle
//     }));
//   };

//   componentDidMount() {
//     console.log('This is Pure Component');
//   }


//   render() {
//     console.log('This is Pure Component');
//     return (
//       <div>
//          <h2>Pure Component</h2>
//          <p>Count: {this.state.count}</p>
//          <button onClick={this.handleToggle}>Set Toggle</button>
//          <button onClick={this.handleIncrement}>Counter</button> 
         
//       </div>
//     );
//   }
// }

// export default PureCounterComponent 
