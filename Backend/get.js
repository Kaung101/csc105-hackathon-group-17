const mysql = require("mysql2");
module.exports = async (req, res) => {

	var sql = mysql.format(
		"select * from Helper"
	);

	global.connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		res.json({
			success: true,
			message: "User has been created",
		});
	});
};