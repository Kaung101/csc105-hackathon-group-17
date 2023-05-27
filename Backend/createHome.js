const mysql = require("mysql2");
module.exports = async (req, res) => {
	const space = req.body.space;
    const address = req.body.address;
    const contact = req.body.contact;
	var sql = mysql.format(
		"INSERT INTO House (space, address, contact, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
		[space, address, contact, new Date(), new Date()]
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
			message: "House has been created",
		});
	});
};