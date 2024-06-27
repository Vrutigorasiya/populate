const express = require("express")

const cityRoute = require("./city.routes")
const stateRoute = require("./state.routes")
const countryRoute = require("./country.routes")

const router = express.Router()

router.use("/city",cityRoute)
router.use("/state",stateRoute)
router.use("/country",countryRoute)

module.exports = router