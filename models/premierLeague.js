import query from "../db/index.js";

export async function getAllTheClub() {
  const data = await query(`SELECT * FROM premierLeague;`);

  return data.rows;
}

export async function getClubById(id) {
  const data = await query(`SELECT * FROM premierLeague WHERE id = $1;`, [id]);

  return data.rows;
}

export async function getClubByPosition(currentLeaguePosition) {
  const data = await query(
    `SELECT * FROM premierLeague WHERE currentLeaguePosition = $1;`,
    [currentLeaguePosition]
  );

  return data.rows;
}

export async function getClubByLocation(location) {
  const data = await query(
    `SELECT * FROM premierLeague WHERE location ILIKE '%' || $1 || '%';`,
    [location]
  );

  return data.rows;
}

export async function createClubDetails(body) {
  //body parameter will be holding 4 different information so, separating through calling
  //each infromation as a variable to represent in different row in the font end table.
  const clubname = body.clubname;
  const managername = body.managername;
  const currentleagueposition = body.currentleagueposition;
  const location = body.location;

  const data = await query(
    `INSERT INTO premierLeague(clubName, managerName, 
        currentLeaguePosition, location) VALUES ($1, $2, $3, $4) RETURNING clubName;`,
    [clubname, managername, currentleagueposition, location]
  );
  //insert table with above data

  return data.rows;
}
export async function updateClubById(body) {
  const clubname = body.clubname;
  const managername = body.managername;
  const currentleagueposition = body.currentleagueposition;
  const location = body.location;
  const id = body.id;
  const data = await query(
    `UPDATE premierLeague SET  clubName=$1, managerName= $2,
    currentLeaguePosition= $3, location = $4 WHERE id = $5 RETURNING clubName;`,
    [clubname, managername, currentleagueposition, location, id]
  );
  //update leyout and parm leyout should be the same otherwise database will not be updated
  //update statement managername, currentLeaguePosition, location, then id,
  // array of item managername, currentleagueposition, location and id
  console.log(data);
  return data.rows;
}

export async function deletedClubById(id) {
  const data = await query(`DELETE FROM premierLeague WHERE id = $1;`, [id]);

  return data.rows;
}
