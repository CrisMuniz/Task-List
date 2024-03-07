import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import confetti from 'canvas-confetti';
import React from 'react';

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, finishTodo, deleteTodo, loading, error}) {
    return(
        <React.Fragment>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
          confetti = {confetti} //aqui llamamos a la dependencia instalada
          loading = {loading}
          />
          {/*creamos unas pros con el nombre que queramos y las pasamos al componente*/}
        <TodoSearch
          searchValue ={searchValue}
          setSearchValue ={setSearchValue}
        />
        <CreateTodoButton/>
        <TodoList>
          {loading && <p>Cargando...</p>}
          {error && <p>Error</p>}
          {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!!</p>}

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
    )
};

export {AppUI};