const { State } = require("../model")

const create_state_s = (data) => {
    console.log("servicessss");
    return State.create(data)
}

const get_state_s = () => {
    return State.find()
}

const delete_state_s = (id) => {
    return State.findByIdAndDelete(id)
}

const update_state_s = (id,data) => {
    return State.findByIdAndUpdate(id,data)
}


module.exports = {
    create_state_s,
    get_state_s,
    delete_state_s,
    update_state_s
}