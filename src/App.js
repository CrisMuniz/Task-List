// import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: "cortar cebolla", completed: true},
  { text: "poner lavadora", completed: false},
  { text: "hacer curso react", completed: false},
  { text: "tocarme las narices un rato", completed: true},
  { text: "hacer la comida", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/> {/*creamos unas pros y las pasamos al componente*/}
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => ( 
        <TodoItem key={todo.text} tarea={todo.text} estado={todo.completed}/>))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
