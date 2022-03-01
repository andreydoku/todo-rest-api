import mongoose from "mongoose";

const schema = mongoose.Schema({
	title: String,
	isDone: Boolean,
}); 

const Todo = mongoose.model( "Todo" , schema );
export default Todo;