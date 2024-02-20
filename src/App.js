// import logo from './platzi.webp';
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
  { text: "tocarme las narices un rato lolo lolo lolo lolo lolo lolo lolo lo lol lol lol llol lololo lololo", completed: true},
  { text: "hacer la comida", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/> {/*creamos unas pros y las pasamos al componente*/}
      <TodoSearch/>
      <CreateTodoButton/>
      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem key={todo.text} tarea={todo.text} estado={todo.completed}/>))}
      </TodoList>
      

    </React.Fragment>
  );
}


export default App;
