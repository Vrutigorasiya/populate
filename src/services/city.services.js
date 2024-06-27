const { City } = require("../model")

const create_city_s = (data) => {
    console.log("servicessss");
    return City.create(data)
}

const get_city_s = () => {
    return City.find().populate("state",{state_name:1})
}

const delete_city_s = (id) => {
    return City.findByIdAndDelete(id)
}

const update_city_s = (id,data) => {
    return City.findByIdAndUpdate(id,data)
}


module.exports = {
    create_city_s,
    get_city_s,
    delete_city_s,
    update_city_s
}