import Todo from "../model/Todo.js";


const todosService = {};

todosService.getAllTodos = async () => {
	
	const allTodos = await Todo.find();//find in DB
	return allTodos;
	
}


todosService.updateTodo = async (id,todo) => {
	
	const updatedTodo = await Todo.findByIdAndUpdate(id,todo,{new: true});
	return updatedTodo;
	
}




export default todosService;