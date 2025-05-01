const mysql2 = require('mysql2/promise');
require('dotenv').config();

const connectMySQL = () => {

    const pool = mysql2.createPool({
        host: 'localhost',
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
        
    }).con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    return pool
}


export { connectMySQL }