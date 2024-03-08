const Todo = require("../models/Todo")

// define route handler

exports.getTodo = async (req, res) => {

    try {

        // fetch all todo from database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire Todo Data is fetch...",
        })
        

    }
    catch(error) {
        console.error(error);
        console.log(error);

        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error', 
        })
    }


}



exports.getTodoById = async (req, res) => {

    try {
        // extract todo items basis on id
        const id = req.params.id;

        const todo = await Todo.findById( {_id: id})

        // data for given id not found
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found for given id",
            })
        }

        // happy case
        // data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo for id: ${id} fetch successfully...`
        })


    }
    catch(error) {
        console.error(error);
        console.log(error);

        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error', 
        })
    }


}