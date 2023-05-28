const mysql = require('mysql2');
const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res) => {
    const token = req.cookies.helper;
    const payload = req.body;

    const isVerified = jsonwebtoken.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUyNTAzNDMsImV4cCI6MTY4NTI1Mzk0M30.pj0g_4ZEeSB7mR62rXMTvCzHSfoxGoq_Khvl-lUOrcU")

    if (!isVerified) {
        res.status(401).send();
        return;
    }

    jsonwebtoken.decode(token, (err, payload) => {
        const helperId = payload.helperId;
        const sql = mysql.format("UPDATE Helper SET name = ?, email = ?, ph_number = ?, address = ? WHERE id = ?", [payload.username, payload.email, payload.phone_number, payload.address, helperId]);

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
