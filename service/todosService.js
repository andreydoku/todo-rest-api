import Todo from "../model/Todo.js";


const todosService = {};

todosService.getAllTodos = async () => {
	
	// var sampleTodos = [
		
	// 	{ title: "todo1" , isDone: false },
	// 	{ title: "todo2" , isDone: false },
	// 	{ title: "todo3" , isDone: true  },
	// ];
	
	// return sampleTodos;
	
	const allTodos = await Todo.find();//find in DB
	return allTodos;
	
}


export default todosService;