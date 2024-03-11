import '../styles/TodoSearch.css';
import React from 'react';
import { TodoContext } from './TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return(
        <form className="formSearch">
        <input
            className="inputSearch"
            placeholder="Ej.Picar cebolla"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
            />
        </form>
    );
}

export {TodoSearch};