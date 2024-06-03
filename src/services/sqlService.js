const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '34.128.74.180',
    user: 'root',
    database: 'emosense-db',
    password: 'Emosense1234'
})
 
async function saveUser(data) {
    const { fullName, email, password, childName, childBirthday, adhdDesc } = data;
    const query = "INSERT INTO user (name, email, password, childName, childBirthday, adhdDesc) values (?, ?, ?, ?, ?, ?)"

    connection.query(query, [fullName, email, password, childName, childBirthday, adhdDesc])
}

async function getAllClinic() {
    // const query = "SELECT * FROM clinics"

    // connection.query(query)

    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM clinics";
        connection.query(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
 
module.exports = {
    saveUser,
    getAllClinic
};