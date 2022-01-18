import query from "../index.js";
import {premierLeague} from "../../premierLeagueTable.js"
//make sure file and name of the variable same as exproted file

async function populateTable(){
    for(let i = 0; i < premierLeague.length; i++){
        const clubName = premierLeague[i].clubName;
        const managerName =premierLeague[i].managerName;
        const currentLeaguePosition =premierLeague[i].currentLeaguePositon;
        const location = premierLeague[i].location;

        const res = await query(`INSERT INTO premierLeague(clubName, managerName, 
            currentLeaguePosition, location) VALUES ($1, $2, $3, $4) RETURNING clubName`,
            [clubName, managerName, currentLeaguePosition, location] );
            
            console.log(res);
    }

    
}

populateTable();