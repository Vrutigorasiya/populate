const express = require("express")
const { city_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-city",
    //controller
    city_controller.create_city
)

router.get(
    "/list",
    //controller
    city_controller.get_city_c
)

router.delete(
    "/delete-city",
    //controller
    city_controller.delete_city
)

//params
router.delete(
    "/delete-city/:cityid",
    //controller
    city_controller.delete_city
)

router.put(
    "/update-city/:update_id",
    //cb
    city_controller.update_city

)

module.exports = router