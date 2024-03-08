import '../styles/TodoCounter.css';
import partyFace from '../images/partyFace.png'

function TodoCounter({ total, completed,confetti, loading}) {
    const handleTitle = ()=> {
        if (loading){
           return (
            <>
            <h1 className= "titleCounter">
                   ¡Bienvenido!
                </h1>
            </>
           );
        } else if (completed === total){
            return(
                <>
                <h1 className= {`titleFinished ${confetti()}`}>
                   ¡Genial! Has terminado tus TODOs <img className='emoji' src={partyFace} alt="" />
                </h1>
               
                </>
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