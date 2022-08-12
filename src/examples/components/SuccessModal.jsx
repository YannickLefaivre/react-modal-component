import { Modal } from "../../lib"
import "./SuccessModal.style.css"

/**
 * @callback handleClose
 *
 * @returns {void}
 */

/**
 * @typedef {Object} SuccessModalProps
 *
 * @property {Boolean} isOpen
 * @property {handleClose} handleClose
 */

/**
 *
 * @param {SuccessModalProps} SuccessModalProps
 *
 * @returns {JSX.Element}
 */
const SuccessModal = ({ isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      overlayClassName="success-modal"
    >
      <div className="success-modal__content">
        <p>Employee created!</p>

        <button
          autoFocus
          onClick={handleClose}
          className="button"
        >
          Close
        </button>
      </div>
    </Modal>
  )
}

export { SuccessModal }
