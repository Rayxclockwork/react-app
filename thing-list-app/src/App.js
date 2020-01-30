import React from 'react';
import Form from './components/List';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this)
  }
  render(){
    return(
      <div className = "App" >
      <Header />
        <List />
        <Form onSubmit= {this.submitHandler}/>
        <Footer />
      </div>
    );
  }
}



export default App;
