import React, {useState} from "react";


//include images into your bundle

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My TODOs</h1>
			<ul>
				<li><input type="text" 
				onChange={(e)=> setInputValue(e.target.value)}
				onKeyPress={(e)=> {
					if(e.key === "Enter" && inputValue != ""){
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				}}
				value={inputValue}
				placeholder="Enter your task"></input></li>
				{todos.map((item, index)=> (
					<li className="lista">{item} <i className="fa-solid fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex)=> index != currentIndex ))}></i></li>
				))}
			</ul>
			<div className="contador"><p>{todos.length} {todos.length === 1 ? "tarea pendiente" : "tareas pendientes"}</p></div>
		</div>
	);
};

export default Home;
