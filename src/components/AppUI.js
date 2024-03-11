import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { TodosEmpty } from "./TodosEmpty";
// import confetti from "canvas-confetti";
import React from "react";
import { TodoContext } from "./TodoContext";
import { TodosSearchedEmpty } from "./TodosSearchedEmpty";

function AppUI() {
  const {
      loading,
      error,
      searchedTodos,
      finishTodo,
      deleteTodo,
      totalTodos
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <CreateTodoButton />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && totalTodos === 0) && <TodosEmpty />}
            {(!loading && totalTodos > 0 && searchedTodos.length === 0 )&& <TodosSearchedEmpty/> }

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                tarea={todo.text}
                estado={todo.completed}
                onComplete={() => finishTodo(todo.text)} //hacemos esto para evitar el error de "to many re-renders".una función dentro de otra función
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

    </React.Fragment>
  );
}

export { AppUI };
