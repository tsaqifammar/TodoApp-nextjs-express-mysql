import React from "react";

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
				{this.state.loading ? (
					<div>Loading...</div>
				) : (
					<div>Hello world!</div>
				)}
			</div>
		);
	}
}

export default List;
