import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase connected:",
            connect.connection.host,
            connect.connection.port,
            connect.connection.name
        );
    } catch (err) {
        console.log('DB error', err);
    }

}


export default connectDb;


// const mysql = require('mysql');
// const pool = mysql.createPool({
//     host: 'your-database-host',
//     user: 'your-database-user',
//     password: 'your-database-password',
//     database: 'your-database-name'
//   });
//   pool.query('SELECT * FROM your_table', (error, results, fields) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       return;
//     }
//     console.log('Query results:', results);
//   });
//   pool.on('error', (err) => {
//     console.error('MySQL Pool Error:', err);
//   });
    