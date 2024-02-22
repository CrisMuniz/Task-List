import './styles/TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
   
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