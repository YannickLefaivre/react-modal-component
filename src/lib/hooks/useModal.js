import { useRef, useState } from "react"

/**
 * @module useModal
 */

/**
 * Enum representing the different open states of the modal.
 * @readonly
 * @enum {boolean}
 */
const MODAL_OPEN_STATE = {
  OPENED: true,
  CLOSED: false,
}

/**
 * @callback clickOutsideCallback
 * @param {MouseEvent} event
 *
 * @return {void}
 */

/**
 * @typedef {object} ModalFeatures
 *
 * @property {boolean} isOpen
 *
 * @property {React.MutableRefObject<any>} openButtonRef
 * Allows you to retrieve the reference of the button that opens the
 * modal in order to restore the focus to it when the latter closes.
 *
 * @property {VoidFunction} open
 *
 * @property {VoidFunction} close
 *
 * @property {clickOutsideCallback} clickOutside
 * Takes care of closing the modal when the user
 * clicks on the backdrop.
 */

/**
 * While the Modal component manages the structure
 * of the modal, this hook manages its functionality.
 * Such as opening and closing it and retrieving focus
 * by the last focused element after it closes.
 *
 * @function
 *
 * @param {MODAL_OPEN_STATE} initialOpeningState
 *
 * @param {String} formId The id of the form that
 * is part of the modal in order to reset it when
 * the modal closes.
 *
 * @returns {ModalFeatures} An object containing the functionality of the modal.
 */
const useModal = (initialOpeningState, formId = "") => {
  const [isOpen, setIsOpen] = useState(initialOpeningState)
  const openButtonRef = useRef(null)

  const open = () => {
    setIsOpen(true)

    document.body.classList.add("disable-scroll")
  }

  const close = () => {
    setIsOpen(false)

    document.body.classList.remove("disable-scroll")

    if (openButtonRef.current) {
      openButtonRef.current.focus()
    }
  }

  const clickOutside = (event) => {
    const outsideTarget =
      event.target.id === "react-modal-component-root" ||
      event.target.id === "react-modal-component-backdrop"

    let modalForm = document.getElementById(formId)

    if (outsideTarget) {
      close()

      if (modalForm) {
        modalForm.reset()
      }
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

export { useModal, MODAL_OPEN_STATE }
