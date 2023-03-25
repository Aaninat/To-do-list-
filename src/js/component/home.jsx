import React from "react";
import Formulario from "./formulario.jsx";
import Todoitem from "./todoitem.jsx";


//create your first component
const Home = () => {
	return (
		<div className="contenerdorPrincipal text-center">
		<h1>To-Do List</h1>
		
			<Formulario/>
			<Todoitem/>
	
			
		
		</div>
	);
};

export default Home;
