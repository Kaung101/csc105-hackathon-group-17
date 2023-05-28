const mysql = require("mysql2");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
	const username = req.body.username;
    const email = req.body.email;
    const ph_number = req.body.phoneNumber;
    const address = req.body.address;
	const password = req.body.password;
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash(password, salt1);
	console.log("Hash #1: ", hash1);

	var sql = mysql.format(
		"INSERT INTO Helper (name, email, ph_number, address, created_at, updated_at, password, hash_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
		[username, email, ph_number, address, new Date(), new Date(), password, hash1]
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
			message: "Helper has been created",
		});
	});
};