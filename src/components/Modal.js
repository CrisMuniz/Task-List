import React from "react";
import { createPortal } from "react-dom";
import '../styles/Modal.css';

function Modal({children}) {
    return createPortal(
        <div className="modalTask">
            <div className="modalBox">
                <a href="#close" className="close">X</a>
                {children}
                <div className="modalBtn">
                <button className="btn">Crear</button>
                </div>

            </div>
        </div>,
        document.getElementById('modal')

    )
}

export { Modal };