const {Pool}= require('pg');

const pool= new Pool({
    user:'my_user',
    password:'root',
    host:'localhost',
    port: 5432,
    database:'pcdb'
});

module.exports=pool;
