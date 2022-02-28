import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from "./controller/todosController.js";

const app = express();

// bodyParser
app.use( bodyParser.json({limit: "30mb", extended: true }) )
app.use( bodyParser.urlencoded({limit: "30mb", extended: true }) )

// cors
app.use( cors() );

//context root
app.use( "/" , router );

// copied from cloud.mongodb.com
const CONNECTION_URL = "mongodb+srv://andreydoku:andreydoku123@cluster0.ftb10.mongodb.net/todo-app?retryWrites=true&w=majority";

//PORT - will be set by Heroku later, otherwise 5000
const PORT = process.env.PORT || 5001;

console.log( "connecting to DB..." );

//use mongoose to connect (using url and port above)
mongoose.connect( CONNECTION_URL ) 
	.then( () => app.listen( PORT , () => console.log("Successfully connected to DB. Port: " + PORT ) ) )
	.catch( () => error => console.log(error.message) );

