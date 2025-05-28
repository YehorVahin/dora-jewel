import React from 'react'
import './Modal.module.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
    {isOpen && (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="modal-content">
                <AiTwotoneCloseCircle className="modal-close-button" onClick={() => onClose()}/>
                {children}
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}
