import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import List from "../components/List/List";

const Index = () => (
	<div>
		<Head>
			<title>Todo App</title>
		</Head>
		<main>
			<Navbar />
			<List />
		</main>
	</div>
);

export default Index;
