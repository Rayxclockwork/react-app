import React from 'react';
import { BookItem, ToReadForm, ReadList } from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
			books: [
				{ id: 1, book: 'Throne of Glass' },
				{ id: 2, book: 'The Blind Assassin' },
			]
    }
    
    this.createThing = this.createThing.bind(this);
  }



  createThing(book) {
    book.id = this.state.books.length + 1

    this.setState({
      books: this.state.books.concat(book)
    })
  }


  render() {
    return (
      <div className="App" >
        <Header thing-count={this.state.books.length} />
        <ReadList bookList={this.state.books}/>
        <ToReadForm onCreated={this.createThing} />
        <Footer />
      </div>
    );
  }
}


export default App;
