import React from 'react';
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

function SnackItem(props) {
  return <li><p>{props.snack.type}</p></li>
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      snacks: [
        { id: 412, type: 'Granola bar' },
        { id: 543, type: 'Ruffles' }
      ]
    }
  }
  render() {
    return (
      this.state.snacks.length &&
      <ul>
        {this.state.snacks.map(snack => <SnackItem key={snack.id} snack={snack} />)}
      </ul>
    )
  }
}

export default App;
