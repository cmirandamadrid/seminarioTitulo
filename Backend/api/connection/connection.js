const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password:'12345678',
    database: 'examen'
});

mysqlConnection.connect( err =>{
    if(err){
        console.log('Error en db: ', err);
        return;
    }else{
        console.log('Db ok');
    }
});

module.exports = mysqlConnection;