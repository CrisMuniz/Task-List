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
  { text: "HACER LA", completed: false},
];

function App() {
  //Estados
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

//Estados Derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      //Creamos variables con los metodos que necesitamos para hacer el includes
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

     return todoText.includes(searchText);
    }
  );
  console.log('los usuarios buscan la info de ' + searchValue);

  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}/>
        {/*creamos unas pros y las pasamos al componente*/}
      <TodoSearch
        searchValue ={searchValue}
        setSearchValue ={setSearchValue}
      />
      <CreateTodoButton/>
      <TodoList>
        {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          tarea={todo.text}
          estado={todo.completed}
          />
          ))}
      </TodoList>


    </React.Fragment>
  );
}


export default App;
