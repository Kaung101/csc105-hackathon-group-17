const mysql = require("mysql2");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	const username = req.body.username;
	const password = req.body.pwd;

	var sql = mysql.format("SELECT * FROM Helper WHERE name = ?", [username]);
	console.log("DEBUG: /basic/login => " + sql);
	connection.query(sql, (err, Helper) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = Helper.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Username not found in the system",
			});
		} else {
			const valid = bcrypt.compare(password, Helper[0].password);

			if (valid) {
				const token = jwt.sign(
					{
						helperId: Helper[0].id,
					},
					"ZJGX1QL7ri6BGJWj3t",
					{ expiresIn: "1h" }
				);
				res.cookie("helper", token);
				res.json({
					success: true,
					message: "Login credential is correct",
					helper: Helper[0],
				});
			} else {
				res.json({
					success: true,
					message: "Login credential is incorrect",
				});
			}
		}
	});
};