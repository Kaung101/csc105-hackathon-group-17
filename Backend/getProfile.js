const mysql = require('mysql2');
const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res) => {
    const token = req.cookies.helper;

    const isVerified = jsonwebtoken.verify(token, "ZJGX1QL7ri6BGJWj3t")

    if (!isVerified) {
        res.status(401).send();
        return;
    }

    jsonwebtoken.decode(token, (err, payload) => {
        const helperId = payload.helperId;

        const sql = mysql.format("SELECT * FROM Helper WHERE id = ?", [helperId]);

        connection.query(sql, (err, helper) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            numRows = helper.length;
            if (numRows == 0) {
                res.json({
                    success: false,
                    message: "Username not found in the system",
                });
                return;
            } else {
                res.json({
                    username: helper[0].name,
                    email: helper[0].email,
                    ph_number: helper[0].ph_number,
                    address: helper[0].address,
                }).send();
            }
        })
    });
}
