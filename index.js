import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import router from "./controller/todosController.js";

const app = express();
dotenv.config();

// bodyParser
app.use( bodyParser.json({limit: "30mb", extended: true }) )
app.use( bodyParser.urlencoded({limit: "30mb", extended: true }) )

// cors
app.use( cors() );

//context root
app.use( "/" , router );

app.get( "/" , (req,res) => {
	res.status(200).send( "Welcome to Todo REST API" );
} );

// copied from cloud.mongodb.com
const CONNECTION_URL = process.env.CONNECTION_URL;

//PORT - will be set by Heroku later, otherwise 5000
const PORT = process.env.PORT || 5002;

console.log( "connecting to DB: " + CONNECTION_URL );

//use mongoose to connect (using url and port above)
mongoose.connect( CONNECTION_URL ) 
	.then( () => app.listen( PORT , () => console.log("Successfully connected to DB. Express is running on port: " + PORT ) ) )
	.catch( () => error => console.log(error.message) );

