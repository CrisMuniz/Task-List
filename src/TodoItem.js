import imageTic from '../src/images/comprobado.png';
import imageError from '../src/images/error.png';
import './styles/TodoItem.css';

function TodoItem(props) {
    return(
      <li className='listTodoItem'>
        <img className='imageTic' src={imageTic} alt="" />
        <p className='parrTodoItem'>{props.tarea}</p>
        <img className='imageError' src={imageError} alt="" />
      </li>
    );
  }

export {TodoItem};