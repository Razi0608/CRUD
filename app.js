const express = require('express')
const app = express()
const port = 3001
const cors = require("cors");
const routes = require("./routes/router");
const mongoose = require("mongoose")
 require("dotenv").config()

mongoose.connect(process.env.MONGO_DB_URL)
.then(() => console.log("Database Connected"))
.catch((err) => {
 console.log(err)
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/', (req, res) => {
    res.send([

        {Apple: 2},
        { Mango: 12 },
        { Banana: 24},
        { Kiwi: 23 },

        {
            name : "sulaim",
            occupation : "backend developer beginner",
            add : "parge nagar",
            mob : "8329562102",
            age : "20"},
               {
        name : "razi",
        add : "Bhagyoday nagar",
        mob : "8325662147",
        age : "20" },
{
    name : "sahil",
    add : "handewadi",
    mob : "83256621079",
    age : "22"
},
    
    ]);
});

