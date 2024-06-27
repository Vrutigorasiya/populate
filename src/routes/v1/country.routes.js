const express = require("express")
const { country_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-country",
    //controller
    country_controller.create_country
)

router.get(
    "/list",
    //controller
    country_controller.get_country_c
)

router.delete(
    "/delete-country",
    //controller
    country_controller.delete_country
)

//params
router.delete(
    "/delete-country/:countryid",
    //controller
    country_controller.delete_country
)

router.put(
    "/update-country/:update_id",
    //cb
    country_controller.update_country

)

module.exports = router