// yaha ek function hoga
// jiska kam todo json object create kr hoga
// aur usko database me save krna
// mongoose ka use kr ke save krna

// todo ka model leke ao
const Todo = require('../models/Todo')


// define route handler

const createTodo = async function(req, res) {

    try {
        // extract title, desc from req body
        const title = req.body.title;
        const description = req.body.description;

        // create a new todo object
        const response = await Todo.create({
            title,
            description,
        })

        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Enter created successfully'
            }
        );

    }
    catch(error) {
        console.log(error);
        console.error(error);
        
        res.status(500).json({
            success: false,
            data: 'Internal server error.',
            messsage: error.message,
        })
    }

}


 




module.exports = {createTodo};