import React from 'react'
import './Modal.module.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export const Modal = ({isOpen, onClose, image, name, weight, stone, article}) => {
  return (
    <>
    {isOpen && (
    <div className="modal">
        <div className="modal-wrapper">
          <AiTwotoneCloseCircle className="modal-close-button" onClick={() => onClose()}/>
            <div className="modal-content"> 
                <img src={image} alt="" className='modal-item-image'/>
                <p className='name'>{name}</p>
                <p className='weight'>Середня вага: {weight}г</p>
                <p className='stone'>Вставка: {stone}</p>
                <p className='article'> Артикул: {article}</p>
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}
