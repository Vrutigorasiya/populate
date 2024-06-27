const { state_service } = require("../services")

const create_state = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_state = await state_service.create_state_s(data)
        if(!new_state){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_state
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_state_c = async(req,res) => {
    try {
        //services
        const state_list = await state_service.get_state_s(req.body)
        if(!state_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:state_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_state = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.stateid

        //services
        // const id = req.body.id
        const result = await state_service.delete_state_s(id)
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

const update_state = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await state_service.update_state_s(id,data)
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
    create_state,
    get_state_c,
    delete_state,
    update_state
}