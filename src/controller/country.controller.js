const { country_service } = require("../services")

const create_country = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_country = await country_service.create_country_s(data)
        if(!new_country){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_country
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_country_c = async(req,res) => {
    try {
        //services
        const country_list = await country_service.get_country_s(req.body)
        if(!country_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:country_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_country = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.countryid

        //services
        // const id = req.body.id
        const result = await country_service.delete_country_s(id)
        console.log(result);

        res.status(200).json({
            success:true,
            message:"data delete",
            id:id
        })

    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const update_country = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await country_service.update_country_s(id,data)
        if(!result){
            throw new Error("not updatedddd")
        }

        res.status(200).json({
            success:true,
            message:"data update",
            data:result
        })

    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    create_country,
    get_country_c,
    delete_country,
    update_country
}