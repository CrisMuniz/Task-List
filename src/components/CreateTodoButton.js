import '../styles/CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <div className='createTodoButton'>
        <button 
            className='button' 
            onClick={
                (event)=> {
                    console.log('le diste click')
                    console.log(event)
                    console.log(event.target)
                    }
                }
        >Crear Tarea</button>
        </div>
    )
}

export {CreateTodoButton};