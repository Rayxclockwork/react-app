import React from 'react';



export default props => (
	<>
		<h1>List of Books I want to Read:</h1>
		<ul>
			{props.book.map(book => <BookItem key={book.id} book={book} onDelete={props.onDelete}/>)}
		</ul>

		<ToReadForm onCreated={props.onCreated} />
	</>
)


function BookItem(props) {
	return (
		<>
		<li>
		<p>{props.book.name}</p>
		<button onClick={() => props.onDelete(props.book)}>delete</button>
		</li>
		</>
	)
}





class ToReadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name : '' };

		this.createThing = this.createThing.bind(this)
		this.changeHandler = this.changeHandler.bind(this);
	}

	createThing(event) {
		event.preventDefault();
		this.props.onCreated({ book: this.state.name });
	}


	changeHandler(event) {
		this.setState({
			name: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<fieldset>
					<legend>Enter Book Title:</legend>
					<input value={this.state.name} onChange={this.changeHandler} type="text"></input>
				</fieldset>
				<button onClick={this.createThing}>submit</button>
			</form>
		);
	}
}



class ReadList extends React.Component {
	

	render() {
		return (
			this.props.bookList.length &&
			<ul>
				{this.props.bookList.map(book => <BookItem key={book.id} book={book.book} />)}
			</ul>

		)
	}
}

export {
	ToReadForm,
	ReadList
}