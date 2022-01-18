import express from "express";
const router = express.Router();

import {
  getAllTheClub,
  getClubById,
  getClubByLocation,
  getClubByPosition,
  createClubDetails,
  deletedClubById,
  updateClubById,
} from "../models/premierLeague.js";

/* GET users listing. */
router.get("/", async (req, res) => {
  const location = req.query.location;
  const currentLeaguePosition = req.query.currentLeaguePosition;
  //as query going through the get request so query need to setup before
  //all other get request and make return call to stop to getting other get request
  //for succesfull query. In this function where ever location or leagueposition selected
  //on query it will stop further execution because return has been called.
  //so, location will return selected query location
  //or if current league position selected it will return requested position.
  if (location) {
    const searchResults = await getClubByLocation(location);
    res.json({
      success: true,
      message: `Searched location for ${location}`,
      payload: searchResults,
    });
    return;
  }
  if (currentLeaguePosition) {
    const searchResults = await getClubByPosition(currentLeaguePosition);
    res.json({
      success: true,
      message: `Searched currentLeaguePosition for ${currentLeaguePosition}`,
      payload: searchResults,
    });
    return;
  }
  //if none of the query seleted get call will return normal get request
  const clubs = await getAllTheClub();

  res.json({
    success: true,
    message: `all the clubs`,
    payload: clubs,
  });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const clubsById = await getClubById(id);

  res.json({
    success: true,
    message: `Found your club by ID ${id}`,
    payload: clubsById,
  });
});

router.post("/", async (req, res) => {
  const body = req.body;
  console.log("This is the body", body);
  const created = await createClubDetails(body);

  res.json({
    success: true,
    message: `Club created on premierLeague table`,
    payload: created,
  });
});

router.put("/:id", async (req, res) => {
  const body = await updateClubById(req.body)

  res.json({
    success: true,
    message: `Club has been succesfully updated`,
    payload: body,
  });
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await deletedClubById(id);

  res.json({
    success: true,
    message: `Successfully deleted ${deleted} requested club.`,
    payload: deleted,
  });
});
export default router;
