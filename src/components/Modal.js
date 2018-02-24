import React from 'react'
import '../styles/Modal.css'

function Modal(props) {
    return (
        <div className="Modal">
            {props.type}
        </div>
    )
}

export default Modal