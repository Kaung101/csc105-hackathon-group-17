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
        const sql = mysql.format("DELETE FROM Helper WHERE id = ?", [helperId]);

        connection.query(sql, (err, helper) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                return res.json({
                    success: true,
                    data: null,
                    error: null,
                })
            }
        })
    });
}
