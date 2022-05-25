
const express = require('express');
const app = express();

const connectDB = require('./app/config/database');

const topicRouters = require("./app/routers/topic");
const categoryRouters = require("./app/routers/category");
const albumRouters = require("./app/routers/album");
const trendingRouters = require("./app/routers/trending");
const playListRouters = require("./app/routers/playlist");
const songRouters = require("./app/routers/song");
const iotSensor = require("./app/routers/iot")


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
app.use("/api", albumRouters);
app.use("/api", trendingRouters);
app.use("/api", playListRouters);
app.use("/api", songRouters);
app.use("/iot", iotSensor);



app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
})

