import React from 'react'
import modalStyle from '../styles/Dashboard/Modal.module.css'
import { IoCloseCircle } from 'react-icons/io5'
type ModalProp = {
  show: boolean;
  children?: JSX.Element;
  setShowModal:(showModal:boolean) => void
}
const  Modal = ({show,children,setShowModal}:ModalProp) => {
  return (
    <>
      {show && <div className={modalStyle.modalContainer}>
        <div className={modalStyle.modalContent}>
          <IoCloseCircle className={modalStyle.close} onClick={()=>setShowModal(false)}/>
              {children}
            </div>

      </div>}
    </>
  )
}

export default  Modal