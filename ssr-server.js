const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const db = require("./database/db");

const Todo = require("./models/Todo");

app.prepare()
	.then(() => {
		// Initiate Express
		const server = express();
		db.authenticate().then(() =>
			console.log("berhasil terkoneksi dengan database")
		);

		// parse application/x-www-form-urlencoded
		server.use(bodyParser.urlencoded({ extended: false }));

		// parse application/json
		server.use(bodyParser.json());

		// Untuk nambahkan todo ke database
		server.post("/server", async (req, res) => {
			try {
				const { todo } = req.body;

				const newTodo = new Todo({
					task_name: todo,
					is_done: false,
				});

				await newTodo.save();

				res.json(newTodo);
			} catch (error) {
				console.log(error);
				res.status(500).send("Server Error");
			}
		});

		// Untuk mengambil semua data 'todo' di database
		server.get("/server", async (req, res) => {
			try {
				const getAllTodos = await Todo.findAll({});
				res.json(getAllTodos);
			} catch (error) {
				console.log(error);
				res.status(500).send("Server Error");
			}
		});

		// Untuk update habis toggle is_done dari sebuah todo
		server.put("/server/done/:id", async (req, res) => {
			try {
				const id = req.params.id;
				const { task_name, is_done } = req.body;
				const updateUser = await Todo.update(
					{
						task_name,
						is_done,
					},
					{
						where: {
							id: id,
						},
					}
				);

				await updateUser;
				res.json("Todo berhasil diupdate");
			} catch (error) {
				console.log(error);
				res.status(500).send("Server Error");
			}
		});

		// Untuk delete todo dengan sebuah id
		server.delete("/server/:id", async (req, res) => {
			try {
				const id = req.params.id;
				const deleteUser = await Todo.destroy({
					where: {
						id: id,
					},
				});
				await deleteUser;
				res.json("Todo berhasil di delete");
			} catch (error) {
				console.log(error);
				res.status(500).send("Server Error");
			}
		});

		// A wildcard route to catch all routes and return it to the handler function. Handler function itu bakal redirect ke page 404 error gaje
		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log("> Ready on http://localhost:3000");
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
