
import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './components/TodoContext';


function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}


export default App;


  // completedTodos = {completedTodos}
    // totalTodos = {totalTodos}
    // searchValue = {searchValue}
    // setSearchValue = {setSearchValue}
    // searchedTodos = {searchedTodos}
    // finishTodo = {finishTodo}
    // deleteTodo = {deleteTodo}
    // loading = {loading}
    // error = {error}