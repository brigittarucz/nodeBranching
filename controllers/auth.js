const express = require('express');
const app = express();

// MARIADB

const mysql = require('mysql2');
const pool = mysql.createConnection({
    host: 'mariadb',
    user: 'root',
    database: 'docker_data',
    password: 'root',
    port: 3306
});
const dbMaria = pool.promise();

exports.getAuth = (req, res, next) => {
    var os = require("os");
    var hostname = os.hostname();
    console.log("Hello from " + hostname);
    
    dbMaria.execute('SELECT * FROM users').then(statusMaria => {
       console.log("Success");
    }).catch(error => {
       console.log(new Error(error));
    })

    res.render('auth');
}
