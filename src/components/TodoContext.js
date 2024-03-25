import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //Estados
  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOs_V1", []);

  const [openModal, setOpenModal] = React.useState(false);
 


  //Estados Derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    //Creamos variables con los metodos que necesitamos para hacer el includes
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });



  // función actualizadora de Añadir TODO
  const addTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }
  // Funcion actualizadora de estado completar TODO
  const finishTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  // Funcion para eliminar un TODO
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1); //con esto sacamos el Todo de la lista
    saveTodos(newTodos);
  };
// Función de botón de Reset para limpiar toda la lista de compleados
  const resetBtn = (text) => {
    const newTodos = [...todos]; //creamos una copia del array inicial
    newTodos.splice({
      text,
      completed: true,
    });
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        finishTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
        resetBtn,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
