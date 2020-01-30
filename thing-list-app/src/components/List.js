import React from 'react';

class ToReadList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Book Title:
              		<input
						name="bookTitle"
						type="text"
						value={this.state.bookTitle}
						onChange={this.handleInputChange} />
				</label>
				<button>submit</button>
			</form>
		);
	}
}



function books(props) {
	return <li><p>{props.books.type}</p></li>
}

class BookList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [
				{ id:1, type: 'Throne of Glass' },
				{ id:2, type: 'This Is How It Always Is' }
			]
		}
	}
	render() {
		return (
			this.state.books.length &&
			<ul>
				{this.state.books.map(books => <BookList key={books.id} books={books} />)}
			</ul>
		)
	}
}

export {
	BookList,
	ToReadList
}