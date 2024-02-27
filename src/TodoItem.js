import imageTic from '../src/images/check.png';
import imageError from '../src/images/delete.png';
import './styles/TodoItem.css';


function TodoItem(props) {
    return(
      <li className='listTodoItem'>

        <img
        className={`imageTic ${props.estado && "imageTic-active"}`}
        onClick={props.onComplete}
        src={imageTic} alt=""/>

        <p className={`parrTodoItem ${props.estado &&"parrTodoItem-complete"}`}>{props.tarea}</p>

        <img
        className={`imageError imageError-delete`}
        onClick = {props.onDelete}
        src={imageError} alt="" />
      </li>
    );
  }

export {TodoItem};