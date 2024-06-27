const { Country } = require("../model")

const create_country_s = (data) => {
    console.log("servicessss");
    return Country.create(data)
}

const get_country_s = () => {
    return Country.find()
}

const delete_country_s = (id) => {
    return Country.findByIdAndDelete(id)
}

const update_country_s = (id,data) => {
    return Country.findByIdAndUpdate(id,data)
}


module.exports = {
    create_country_s,
    get_country_s,
    delete_country_s,
    update_country_s
}