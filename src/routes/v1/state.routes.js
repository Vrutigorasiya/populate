const express = require("express")
const { state_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-state",
    //controller
    state_controller.create_state
)

router.get(
    "/list",
    //controller
    state_controller.get_state_c
)

router.delete(
    "/delete-state",
    //controller
    state_controller.delete_state
)

//params
router.delete(
    "/delete-state/:stateid",
    //controller
    state_controller.delete_state
)

router.put(
    "/update-state/:update_id",
    //cb
    state_controller.update_state

)

module.exports = router