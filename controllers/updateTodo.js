// import model

const Todo = require("../models/Todo")

exports.updateTodo = async (req, res) => {

    try {

        const id = req.params.id;
        // const {id} = req.params;

        const todo = await Todo.findByIdAndUpdate(
            {
                _id: id
            },
            {
                title,
                description,
                updatedAt: Date.now(),
            }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: 'updated successfully...'
        })


    }
    catch(error) {
        console.error(error);
        console.log(error);

        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Server Error can not update', 
        })


    }

}