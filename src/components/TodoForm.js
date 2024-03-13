import React from "react";
import '../styles/TodoForm.css';
import { TodoContext } from "./TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,  
      } = React.useContext(TodoContext);

    // Creamos el estado local de anadir lo que hay en el textarea
    const[newTodoValue, setNewTodoValue] = React.useState('');

    // con esto cancelamos el evento propio del formulario para poder controlar la info que enviamos(evitamos que la pág se recargue)
    const onSubmit = (event) =>{
        event.preventDefault();
        setOpenModal(false); //*con esto cerramos el modal si damos a cualquier boton
        addTodo(newTodoValue); //*actualizamos lo que hay en le textarea y lo añadimos a ese estado addTodo
    }
   

    //Creamos una funcion con el evento de parta el boton de cnacelar
    const onCancel = (event) => {
        setOpenModal(false);
    }

    //  creamos una funcion para el evento que recibimos del cambio del textarea cuando escribimos
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form 
            onSubmit={onSubmit}
            className="form">
            <label className="formLabel">¿Qué TODO quieres realizar?</label>
            <textarea 
                className="formTextarea"
                placeholder="Apuntarme al gimnasio"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="buttons">
            <button 
                type="button"
                className="cancelBtn"
                onClick={onCancel}
                >Cancelar</button>
            <button 
                type="submit"
                className="addBtn">Añadir</button>
            </div>
        </form>
    )
};

export { TodoForm };