import imageTic from '../src/images/comprobado.png';
import imageError from '../src/images/error.png';
import './styles/TodoItem.css';

function TodoItem(props) {
    return(
      <li className='listTodoItem'>
        <img className={`imageTic ${props.estado && "imageTic-active"}`}src={imageTic} alt=""/>
        <p className={`parrTodoItem ${props.estado &&"parrTodoItem-complete"}`}>{props.tarea}</p>
        <img className={`imageError imageError-delete`} src={imageError} alt="" />
      </li>
    );
  }

export {TodoItem};