import './styles/TodoCounter.css';

function TodoCounter({ total, completed,confetti}) {
    const handleTitle = ()=> {
        if (completed === total){
            return(
               
                <h1 className= {`titleFinished ${confetti()}`}>
                   ¡Genial! Has terminado tus tareas
                </h1>
              
            );
        } else {
            return(
                <h1 className='titleCounter'>
                    Has completado <span>{completed}</span> de <span>{total}</span> TODOs
                </h1>
              
            );
        }
    }
  return( handleTitle());
}

export {TodoCounter};