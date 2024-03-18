import '../styles/TodoCounter.css';
import partyFace from '../images/partyFace.png'
import React from 'react';
import { TodoContext } from './TodoContext';
import confetti from 'canvas-confetti';
import { Reset } from './Reset';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
        loading,
    } = React.useContext(TodoContext);
   
    const handleTitle = ()=> {

        if (loading){
           return (
            <>
            <h1 className= "titleCounter">
                   ¡Bienvenido!
                </h1>
            </>
           );
        } else if (completedTodos === totalTodos && totalTodos > 0){
            return(
                <>
                <h1 className= {`titleFinished ${confetti}`}>
                   ¡Genial! Has terminado tus TODOs <img className='emoji' src={partyFace} alt="" />

                </h1>
                <Reset/>
                </>

            );

        } else {
            return(
                <h1 className='titleCounter'>
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
            </h1>
            )
        }
    }
  return( handleTitle());
}

export {TodoCounter};