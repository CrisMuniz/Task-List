import '../styles/CreateTodoButton.css';
import { TodoContext } from './TodoContext';
import React from 'react';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(
        <div className='createTodoButton'>
        <button 
            className='button' 
            onClick={()=> {
                    console.log('le diste click')
                    if(!openModal){
                        setOpenModal(true)
                    }else {
                        setOpenModal(false)
                    }
                    }
                }
        >Crear Tarea</button>
        </div>
    )
}

export {CreateTodoButton};