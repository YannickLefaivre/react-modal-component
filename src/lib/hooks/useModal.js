import React, { useRef, useState } from "react"

export const MODAL_OPENING_STATE = {
  OPENED: true,
  CLOSED: false,
}

/**
 * @typedef {object} ModalState
 * @property {boolean} isOpen
 * @property {React.ReactNode} openButtonRef
 * @property {() => void} open
 * @property {() => void} close
 */

/**
 * @param {MODAL_OPENING_STATE} initialOpeningState
 *
 * @returns {ModalState}
 */
const useModal = (initialOpeningState) => {
  const [isOpen, setIsOpen] = useState(
    initialOpeningState
  )
  const openButtonRef = useRef(null)

  const open = () => {
    setIsOpen(true)

    document.body.classList.add("disable-scroll")
  }

  const close = () => {
    setIsOpen(false)

    document.body.classList.remove("disable-scroll")

    openButtonRef.current.focus()
  }

  const clickOutside = (event) => {
    const outsideTarget =
      event.target.id ===
        "react-modal-component-root" ||
      event.target.id ===
        "react-modal-component-overlay"

    if (outsideTarget) {
      close()
    }
  }

  return {
    isOpen,
    openButtonRef,
    open,
    close,
    clickOutside,
  }
}

export { useModal }
