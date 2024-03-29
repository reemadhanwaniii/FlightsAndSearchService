const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const { FlightMiddlewares } = require("../../middlewares/index");

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);


router.post('/flight',
FlightMiddlewares.validateCreateFlight,
FlightController.create);

router.get('/flight',FlightController.getAll);
router.get('/flight/:id',FlightController.get);
router.patch('/flight/:id',FlightController.update);

router.post('/airport',AirportController.create);


module.exports = router;