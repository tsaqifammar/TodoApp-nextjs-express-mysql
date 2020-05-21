const Sequelize = require("sequelize");

const db = new Sequelize("todo_crud", "root", "", {
	host: "localhost",
	dialect: "mysql",
	operatorsAliases: "0",

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: { freezeTableName: true },
});

db.sync({});

module.exports = db;
