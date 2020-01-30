import React from 'react';
import {BookList, ToReadList} from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  
  render(){
    return(
      <div className = "App" >
      <Header />
        <BookList />
        <ToReadList onSubmit= {this.submitHandler}/>
        <Footer />
      </div>
    );
  }
}



export default App;
