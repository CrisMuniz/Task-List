import React from "react";
import "../styles/Reset.css";
import { TodoContext } from "./TodoContext";

function Reset() {
    const {
        resetBtn,
    } = React.useContext(TodoContext);
    // Crear el estado del boton Reset
   const [reset , setReset] = React.useState(false)

    const onReset= () => {
        setReset(true)
        resetBtn(reset)

    }
  
    return(<>
        <div className="resetContainer">
        <button
        className="reset"
        onClick={onReset}
        >
            Reset
        </button>
        </div>
    </>
    );
}

export {Reset};