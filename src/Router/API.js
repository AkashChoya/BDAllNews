const express = require("express");
const CreateUser = require("../controller/Controll")


const Router = express.Router();

Router.post("/viral", CreateUser.CreateUser)
Router.post("/offer", CreateUser.CreateUser)






module.exports= Router