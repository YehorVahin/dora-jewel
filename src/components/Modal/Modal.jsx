import React from 'react'
import './Modal.module.css'
import { IoMdClose } from "react-icons/io"


export const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
    {isOpen && (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="modal-content">
                <button onClick={() => onClose()}><IoMdClose className="modal-close-button"/></button>
                {children}
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}
