const { city_service } = require("../services")

const create_city = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_city = await city_service.create_city_s(data)
        if(!new_city){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_city
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_city_c = async(req,res) => {
    try {
        //services
        const city_list = await city_service.get_city_s(req.body)
        if(!city_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:city_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_city = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.cityid

        //services
        // const id = req.body.id
        const result = await city_service.delete_city_s(id)
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

const update_city = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await city_service.update_city_s(id,data)
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
    create_city,
    get_city_c,
    delete_city,
    update_city
}