import express from "express";

// import Todo from "../model/Todo.js";
import todosService from "../service/todosService.js";


const router = express.Router();

router.get( "/todos" , async (req,res) => {
	
	console.log( "received GET request: " + "/todos" );
	
	try {
		
        const allTodos = await todosService.getAllTodos();
        res.status(200).json( allTodos );
		
    } catch (error) {
		
        res.status(500).send( error.message );
		
    }

});
router.post( "/todos/:id" , async (req,res) => {
	
	const { id } = req.params;
	const body = req.body;
	console.log( "received POST request: " + "/todos/{id}"
		 + "\n\t" + "id: " + id 
		 + "\n\t" + JSON.stringify(body) );
	
	try {
		
        const updatedPost = await todosService.updateTodo(id,body);
		
		console.log( "\n\t" + "update successful.  Response: 200" + "\n\t" + JSON.stringify(updatedPost) + "\n"  );
		res.status(200).json( updatedPost );
		
		
    } catch (error) {
		
        res.status(500).send( error.message );
		
    }

});


export default router;