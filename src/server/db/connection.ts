import mysql from 'mysql2/promise';

const pool = mysql.createPool ({
    host: 'localhost',
    user: 'first_user',
    password:'password123',
    database: 'first_you_create'
})


export default pool;



