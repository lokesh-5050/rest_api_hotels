const express = require("express");
const router = express.Router();

const { allHotels, popularHotels, handleHotelsByCity } = require("../controllers/indexControllers");

/* GET: Route to get all hotels */
router.get("/hotels", allHotels);

/* GET: Route to get popular hotels */
router.get("/popularHotels", popularHotels);

/* GET: Route to get popular hotels */
router.get('/hotelByCity' , handleHotelsByCity)

module.exports = router;
