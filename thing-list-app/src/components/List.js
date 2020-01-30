import React from 'react';

class Form extends React.Component {
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
					Name:
			<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
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

export default List;