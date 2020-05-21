import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

const initialState = {
	todo: "",
};

class Crud extends React.Component {
	constructor() {
		super();
		this.state = initialState;
	}

	handleChange = (evt) => {
		// This triggers everytime the input is changed
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		const dataSubmit = this.state;
		console.log(dataSubmit);
		// clear form
		this.setState(initialState);
		// making a post request with the fetch API
		fetch("/server", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataSubmit),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div>
				<Head>
					<title>CRUD TodoApp</title>
				</Head>
				<div className="container">
					<Navbar />
					<form onSubmit={this.handleSubmit}>
						<label>Todo</label>
						<br />
						<br />
						<input
							name="todo"
							type="text"
							id="name"
							placeholder="Masukkan sebuah todo.."
							value={this.state.todo}
							onChange={this.handleChange}
							className="inputText"
						></input>
						<br />
						<button type="submit">Tambahkan Todo</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Crud;
