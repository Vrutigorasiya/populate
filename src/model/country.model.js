const mongoose = require("mongoose")

const country_schema = mongoose.Schema(
    {
        country_name:{
            type:String,
            trim:true
        },
        country_language:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const country = mongoose.model("Country",country_schema)

module.exports = country