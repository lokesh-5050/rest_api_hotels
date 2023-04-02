const express = require("express");
const router = express.Router();

const { allHotels ,popularHotels } = require("../controllers/indexControllers");

/* GET: Route to get all hotels */
router.get("/hotels", allHotels);

/* GET: Route to get popular hotels */
router.get("/popularHotels", popularHotels);

module.exports = router;
