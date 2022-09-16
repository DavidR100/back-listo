
const config = require('./config');

const db = {};

const mysql = require('mysql');

//Start BD
let connection;

try {
    connection = mysql.createConnection({
        host: config.host_db,
        user: config.user_db,
        password: config.password_db,
        database: config.db
    });
} catch (error) {
    console.log("Error , no se pudo conectar a la BD");
}

db.executeQuery =  async (query, callback)=>{

  try {

    const result = await connection.query(query, callback);



  } catch (error) {

    return callback(true,[error]);

  }

}


module.exports=db;