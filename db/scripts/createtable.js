import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS premierLeague(
    ID SERIAL PRIMARY KEY,
    clubName varchar(255) NOT NULL,
    managerName varchar(255) NOT NULL,
    currentLeaguePosition int,
    location varchar(255) NOT NULL
   

);`

async function createTable (){

    const res = await query(sqlString);

    console.log('Created new PremierLeague Table', res)
    //calling the res through console log this is the result for query array

}

createTable();