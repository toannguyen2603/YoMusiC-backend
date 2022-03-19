
const express = require('express');
const app = express();

const connectDB = require('./app/config/database');


const PORT = process.env.PORT || 8000;

app.get('/' , (req , res)=> {
   res.send('hello from simple server :)')
});

connectDB();


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
})

