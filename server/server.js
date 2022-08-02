const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database");

const Subscriber = require("./models/Subscriber");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/subscribers', async (req, res)=>{
    const subscribers = await Subscriber.find();
    res.json(subscribers)
})

app.post('/add-subscriber', async (req, res)=> {
    const {nombre, apellido, email} = req.body;
    const newSubscriber = new Subscriber({nombre, apellido, email});
    await newSubscriber.save();
    res.send('¡Te has subscripto correctamente!')
})





app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})
