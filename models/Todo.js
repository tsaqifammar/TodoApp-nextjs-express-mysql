const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.define(
	"todo",
	{
		id: {
			type: Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		task_name: {
			type: Sequelize.STRING,
		},
		is_done: Sequelize.BOOLEAN,
	},
	{
		timestamps: false,
	}
);
