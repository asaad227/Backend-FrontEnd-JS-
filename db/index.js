import pg from "pg";
import {db} from "../config.js"
// first pg need to import from the package pg


//creating pool for database and linked pg with it 
const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
  ssl: {rejectUnauthorized: false}

})

//make a query function with text and params and return this function calling pool variable 
//and export to createtable and populatetable to get the details  data....
export default function query (text, params){

    return pool.query(text, params)
}