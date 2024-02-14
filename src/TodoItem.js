function TodoItem(props) {
    return(
      <li>
        <span>V</span>
        <p>{props.tarea}</p>
        <span>X</span>
      </li>
    );
  }

export {TodoItem};