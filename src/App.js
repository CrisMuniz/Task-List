
import React from 'react';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { AppUI } from './components/AppUI';



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
//Estados
  const [searchValue, setSearchValue] = React.useState('');
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error,} = useLocalStorage('TODOs_V1', []);

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


// Funcion actualizadora de estado
  const finishTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }
// Funcion para eliminar un TODO
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); //con esto sacamos el Todo de la lista
    saveTodos(newTodos)
  }

  return (
    <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    finishTodo = {finishTodo}
    deleteTodo = {deleteTodo}
    loading = {loading}
    error = {error}
    />
  );
}


export default App;
