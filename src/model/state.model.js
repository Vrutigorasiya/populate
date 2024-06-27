const mongoose = require("mongoose")

const state_schema = mongoose.Schema(
    {
        state_name:{
            type:String,
            trim:true
        },
        state_pincode:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const state = mongoose.model("State",state_schema)

module.exports = state