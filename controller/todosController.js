import express from "express";
import mongoose from "mongoose";

// import Todo from "../model/Todo.js";
import todosService from "../service/todosService.js";


const router = express.Router();

//get all todos
router.get( "/todos" , async (req,res) => {
	
	console.log( "received GET request: " + "/todos" );
	
	try {
		
        const allTodos = await todosService.getAllTodos();
		
		console.log( "\n\t" + "get successful.  Response: 200" + "\n\t" + JSON.stringify(allTodos) + "\n"  );
        res.status(200).json( allTodos );
		
    } catch (error) {
		
		console.error( "\n\t" + "getAllTodos failed.  Response: 500" + "\n\t" + error.message + "\n"  );
        res.status(500).send( error.message );
		
    }

});

//update one todo
router.post( "/todos/:id" , async (req,res) => {
	
	const { id } = req.params;
	const body = req.body;
	console.log( "received POST request: " + "/todos/{id}"
		 + "\n\t" + "id: " + id 
		 + "\n\t" + JSON.stringify(body) );
	
	if( !mongoose.Types.ObjectId.isValid(id) )
	{
		var errorMessage = "ID not found: " + id;
		console.error( "\n\t" + "Response: 404" + "\n\t" + errorMessage + "\n"  );
		return res.status( 404 ).send( errorMessage );
	}	 
		 
	try {
		
        const updateTodo = await todosService.updateTodo(id,body);
		
		console.log( "\n\t" + "update successful.  Response: 200" + "\n\t" + JSON.stringify(updateTodo) + "\n"  );
		res.status(200).json( updateTodo );
		
		
    } catch (error) {
		
		console.error( "\n\t" + "update failed.  Response: 500" + "\n\t" + error.message + "\n"  );
        res.status(500).send( error.message );
		
    }

});

//add one todo
router.post( "/todos" , async (req,res) => {
	
	const body = req.body;
	
	console.log( "received POST request: " + "/todos"
		 + "\n\t" + JSON.stringify(body) );
	
	try {
		const newTodo = await todosService.addTodo( body );
		
		console.log( "\n\t" + "add successful.  Response: 201" + "\n\t" + JSON.stringify(newTodo) + "\n"  );
        res.status(201).json( newTodo );
		
    } catch (error) {
		
		console.error( "\n\t" + "add failed.  Response: 500" + "\n\t" + error.message + "\n"  );
        res.status(500).send( error.message );
		
    }

});

//delete one todo
router.delete( "/todos/:id" , async (req,res) => {
	
	const { id } = req.params;
	
	console.log( "received DELETE request: " + "/todos/{id}"
		 + "\n\t" + "id: " + id );
	
	if( !mongoose.Types.ObjectId.isValid(id) )
	{
		var errorMessage = "ID not found: " + id;
		console.error( "\n\t" + "Response: 404" + "\n\t" + errorMessage + "\n"  );
		return res.status( 404 ).send( errorMessage );
	}
		 
	try {
		
        const deletedTodo = await todosService.deleteTodo(id);
		
		console.log( "\n\t" + "delete successful.  Response: 200" + "\n\t" + JSON.stringify(deletedTodo) + "\n"  );
		res.status(200).json( deletedTodo );
		
		
    } catch (error) {
		
		console.error( "\n\t" + "delete failed.  Response: 500" + "\n\t" + error.message + "\n"  );
        res.status(500).send( error.message );
		
    }

});

export default router;