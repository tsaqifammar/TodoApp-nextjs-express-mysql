import React from "react";
import OneElement from "./OneElement";

// TODO : isi List ini todos dengan button delete dan update
// * jadi read dari database? trus print dengan corresponding stuff ?

class List extends React.Component {
	state = {
		loading: true,
		todosList: [],
	};

	async componentDidMount() {
		const url = "/server";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		this.setState({ todosList: data, loading: false });
	}

	render() {
		return (
			<div className="container">
				<h1>Todos : </h1>
				{this.state.loading ? (
					<div>Loading...</div>
				) : (
					this.state.todosList.map((todo) => (
						<OneElement key={todo.id} todo={todo} />
					))
				)}
			</div>
		);
	}
}

export default List;
