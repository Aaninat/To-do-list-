import React, { useState } from "react";

function Formulario() {
  const [tarea, setTarea] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    if (tarea !== "" && e.key === "Enter") {
      setTodos([...todos, tarea])
      setTarea("")
    }
  };

  const handleClick = (e) => {
    if (tarea !== "") {
      setTodos([...todos, tarea])
      setTarea("")
    }
  };

  const eliminarTarea = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="contenedor">
      <input
        type="text"
        placeholder="Agregar tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyUp={addTodo}
      />

      <button className="btn btn-success add" onClick={handleClick}>
        AGREGAR
      </button>
      
      <div className="receptortareas">
        {todos.map((item, index) => (
          <div className="botondelete">
            <p className ="parrafo" key={index}>
            {item}
            
          </p>
          <button className="btn btn-danger delete" onClick={() => eliminarTarea(index)}>Eliminar</button>
          <hr/>
          </div>
        ))}
           <div><p className="footer">{todos.length} items left</p></div>
      </div>
    </div>
  );
}

export default Formulario;
