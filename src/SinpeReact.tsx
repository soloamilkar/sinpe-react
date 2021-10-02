import React from 'react'
import { SinpeProps } from './types/index'
import useModal from './hooks/useModal'
import SinpeModal from './SinpeModal'
import styles from '../styles/Modal.module.css'

const SinpeReact = (props: SinpeProps) => {
  const btnClass = props.btnClass ? props.btnClass : styles.defaultButtonStyle

  const modalClass = props.modalClass
    ? props.modalClass
    : styles.defaultModalStyle

  const { isOpen, onToggle } = useModal()

  return (
    <>
      <button className={btnClass} onClick={onToggle}>
        Pagar con Sinpe
      </button>
      {isOpen && <SinpeModal modalClass={modalClass} />}
    </>
  )
}

export default SinpeReact
