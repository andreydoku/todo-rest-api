import express from "express";

// import Todo from "../model/Todo.js";
import todosService from "../service/todosService.js";


const router = express.Router();

router.get( "/todos" , async (req,res) => {
	
	console.log( "received request: " + "/todos" );
	
	try {
		
        const allTodos = await todosService.getAllTodos();
		// const allTodos = await Todo.find();
		
        res.status(200).json( allTodos );
    } catch (error) {
        res.status(500).send( error.message );
    }

	
});


export default router;