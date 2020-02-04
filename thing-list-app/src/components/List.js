import React from 'react';



export default props => (
	<>
		<h1>List of Books I want to Read:</h1>
		<ul>
			{props.book.map(book => <BookItem book={book} />)}
		</ul>

		<ToReadForm onCreated={props.onCreated} />
	</>
)


function BookItem(props) {
	return <li><p>{JSON.stringify(props.book)}</p></li>
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
	BookItem,
	ToReadForm,
	ReadList
}