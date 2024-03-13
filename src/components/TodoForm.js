import React from "react";
import '../styles/TodoForm.css';

function TodoForm() {
    return(
        <form className="form">
            <label>¿Que TODO quieres realizar?</label>
            <textarea 
                placeholder="Apuntarme al gimnasio"
            />
            <button className="cancelBtn">Cancelar</button>
            <button className="addBtn">Añadir</button>
        </form>
    )
};

export { TodoForm };