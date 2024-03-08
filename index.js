const express = require('express')

const app = express();

// load config from env
require('dotenv').config();

const PORT = process.env.PORT || 4000;


// middleware to parse json request body
// ye middlware req body ko parse krega

app.use(express.json());


// import routes from TODO API
const todoRoutes = require('./routes/todos')


// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`)
})

// connect to the database
const dbConnect = require("./config/database")
dbConnect();


// default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is my homepage baby....</h1>`)
})






