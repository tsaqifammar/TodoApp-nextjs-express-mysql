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

	toggleComplete = async (id) => {
		// console.log(id, "Toggled!");
		let todoUpdate;
		this.setState({
			todosList: this.state.todosList.map((todo) => {
				if (todo.id === id) {
					todoUpdate = todo;
					todoUpdate.is_done = !todoUpdate.is_done;
					return todoUpdate;
				} else {
					return todo;
				}
			}),
		});
		// console.log(todoUpdate);
		const url = "/server/done/" + id;
		fetch(url, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todoUpdate),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div className="container">
				<h1>Todos : </h1>
				{this.state.loading ? (
					<div>Loading...</div>
				) : (
					this.state.todosList.map((todo) => (
						<OneElement
							key={todo.id}
							todo={todo}
							toggleComplete={this.toggleComplete}
						/>
					))
				)}
			</div>
		);
	}
}

export default List;
