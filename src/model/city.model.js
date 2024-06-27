const mongoose = require("mongoose")

const city_schema = mongoose.Schema(
    {
        city_name:{
            type:String,
            trim:true
        },
        city_pincode:{
            type:Number,
            default:0
        },
        state:{
            type:mongoose.Types.ObjectId,
            ref:"State"
        }
    },
    {
        timestamps:true
    }
)

const city = mongoose.model("City",city_schema)

module.exports = city