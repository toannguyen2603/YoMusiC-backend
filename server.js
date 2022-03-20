
const express = require('express');
const app = express();

const connectDB = require('./app/config/database');

const topicRouters = require("./app/routers/topic");
const categoryRouters = require("./app/routers/category");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/' , (req , res)=> {
   res.send('hello from simple server :)')
});

// Call connect database
connectDB();

app.use("/api", topicRouters);
app.use("/api", categoryRouters);


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
})

