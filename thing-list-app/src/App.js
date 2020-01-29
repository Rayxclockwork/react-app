import React from 'react';
import Form from 'List';
import List from 'List';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this)
  }
  render(){
    return(
      <div className = "App" >
        <List />
        <Form onSubmit= {this.submitHandler}/>
      </div>
    );
  }
}



export default App;
