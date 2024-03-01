// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import confetti from 'canvas-confetti';



// const defaultTodos = [
//   { text: "cortar cebolla", completed: true},
//   { text: "poner lavadora", completed: false},
//   { text: "hacer curso react", completed: false},
//   { text: "tocarme las narices un rato lolo lolo lolo lolo lolo lolo lolo lo lol lol lol llol lololo lololo", completed: true},
//   { text: "hacer la comida", completed: false},
//   { text: "HACER LA", completed: false},
// ];
// localStorage.setItem('TODOs_V1', JSON.stringify(defaultTodos));

// localStorage.setItem('TODOs_V1', defaultTodos);
// localStorage.removeItem("TODOs_V1");


function App() {
  // LocalStorage
  const localStorageTodos = localStorage.getItem('TODOs_V1');
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOs_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //Estados
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);

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

// Función que actualiza el estado y el localStorage al mismo tiempo
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOs_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  // Funcion actualizadora de estado
  const finishTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }
  // Funcion para eliminar un TODO
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1); //con esto sacamos el Todo de la lista
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
        confetti = {confetti} //aqui llamamos a la dependencia instalada
        />
        {/*creamos unas pros con el nombre que queramos y las pasamos al componente*/}
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
          onComplete = {() => finishTodo(todo.text)}  //hacemos esto para evitar el error de "to many re-renders".una función dentro de otra función
          onDelete = {() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>


    </React.Fragment>
  );
}


export default App;
