const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

connectString='mongodb+srv://Ngochai09252002:Ngochai09252002@cluster0.pvw9ivp.mongodb.net/Restaurant?retryWrites=true&w=majority'
mongoose.connect(
    connectString,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(foodRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});