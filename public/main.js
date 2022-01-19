const button = document.getElementById("btn");
const premierTable = document.getElementById("table");
const timeDetails = document.getElementById("time");

timeDetails.innerHTML = new Date();

async function getApi() {
  const response = await fetch(`http://localhost:5000/`);
  //destructure the data and get the array out of it.
  const { payload } = await response.json();
  console.log(payload);
  //commented out id deatils doesnt looks nice for the table
  //const thId = document.createElement("th");
  //thId.innerHTML = `ID`;
  //creating heading of the table and label out with correct name through innerHTML.
  const thClubName = document.createElement("th");
  thClubName.innerText = `Club Name`;
  const thManagerName = document.createElement("th");
  thManagerName.innerText = `Manager Name`;
  const thCurrentPosition = document.createElement("th");
  thCurrentPosition.innerText = `League Position`;
  const thLocation = document.createElement("th");
  thLocation.innerText = `Location`;

  // appended all the table head to the table
  //premierTable.appendChild(thId);
  premierTable.appendChild(thClubName);
  premierTable.appendChild(thManagerName);
  premierTable.appendChild(thCurrentPosition);
  premierTable.appendChild(thLocation);

  //it will collect each of the details from the array
  payload.forEach((element) => {
    //create a call back funtion and collect each data feeds.
    const tr = createTable(element);

    premierTable.appendChild(tr);
    // all the table data append to table.
  });
}

//destructure parameter used to target object from the array
function createTable({
  id,
  clubname,
  managername,
  currentleagueposition,
  location,
}) {
  const tr = document.createElement("tr");
  //const tdId = document.createElement("td");
  //tdId.innerText = `${id}`;
  const tdClubName = document.createElement("td");

  tdClubName.innerText = `${clubname}`;
  const tdManagerName = document.createElement("td");

  tdManagerName.innerText = `${managername}`;
  const tdCurrentPosition = document.createElement("td");

  tdCurrentPosition.innerText = `${currentleagueposition}`;
  const tdLocation = document.createElement("td");

  tdLocation.innerText = `${location}`;

  //tr.appendChild(tdId);
  tr.appendChild(tdClubName);
  tr.appendChild(tdManagerName);
  tr.appendChild(tdCurrentPosition);
  tr.appendChild(tdLocation);
  return tr;
}

getApi();

button.addEventListener("click", getApi);
