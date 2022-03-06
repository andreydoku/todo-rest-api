import Todo from "../model/Todo.js";


const todosService = {};

todosService.getAllTodos = async () => {
	
	const allTodos = await Todo.find();//find in DB
	return allTodos;
	
}


todosService.updateTodo = async (id,todo) => {
	
	const updatedTodo = await Todo.findByIdAndUpdate( id , todo , {new: true} );
	return updatedTodo;
	
}

todosService.addTodo = async (todo) => {
	
	const newTodo = new Todo( todo ).save();
	return newTodo;
}

todosService.deleteTodo = async (id) => {
	
	const deletedTodo = await Todo.findByIdAndDelete( id );
	return deletedTodo;
	
}




export default todosService;