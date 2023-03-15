const Pool = require('pg').Pool
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
});
pool.connect((err)=>{
    if(err){
        console.log(err);
    } else{
        console.log(process.env.DB_USER+"-"+process.env.DB_NAME+"-"+process.env.DB_PASSWORD);
    }
});
// console.log("Connected");

module.exports = {
    pool
}