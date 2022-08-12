import "./Modal.style.css"

/**
 * @callback onClose
 * @param {MouseEvent | KeyboardEvent} event
 *
 * @returns {void}
 */

/**
 * @typedef {Object} ModalProps
 *
 * @property {Boolean} isOpen
 *
 * @property {String} overlayClassName Allows to
 * customize the style of the background of the
 * modal.
 *
 * - You can name your class whatever you want as
 * long as you don't use the package namespace:
 * `.react-modal-component*`.
 *
 *
 * @property {ReactNode} children Represents the
 * content of the modal.
 *
 * @property {onClose} onClose The callback function
 * that sets isOpen to false.
 *
 *  - This is used to close the modal when clicking
 *  on the background or pressing the `Escape` key.
 */

/**
 * Displays a modal whose content is displayed with
 * the `children` prop when the `isOpen` prop
 * is true.
 *
 * @param {ModalProps} ModalProps
 *
 * @returns {JSX.Element} The modal component
 *
 * @example
 *
 * // YourStylizedModal.jsx
 *
 * import { Modal } from "react-modal-component"
 *
 * const YourStylizedModal = ({ isOpen, handleClose }) => {
 *   return (
 *     <Modal
 *       isOpen={isOpen}
 *       onClose={handleClose}
 *       overlayClassName="success-modal"
 *     >
 *       <div
 *         className="success-modal__content"
 *       >
 *         <p>Employee created!</p>
 *
 *         <button
 *           autoFocus
 *           onClick={handleClose}
 *           className="button"
 *         >
 *           Close
 *         </button>
 *       </div>
 *     </Modal>
 *   )
 * }
 *
 * // App.jsx
 *
 * import { useState } from "react"
 * import { YourStylizedModal } from "./path/to/your/component/folder"
 *
 * const App = () => {
 *   const [isOpen, setIsOpen] = useState(false)
 *
 *   return (
 *     <>
 *       <header>
 *         <h1>Example modal</h1>
 *       </header>
 *
 *       <main>
 *         <button
 *           onClick={() => setIsOpen(true)}
 *           className="button success-button"
 *         >
 *           Open success modal
 *         </button>
 *       </main>
 *
 *       <SuccessModal
 *         isOpen={isOpen}
 *         handleClose={() => setIsOpen(false)}
 *       />
 *     </>
 *   )
 * }
 */
const Modal = ({
  isOpen,
  overlayClassName,
  children,
  onClose,
}) => {
  const handleClose = (event) => {
    if (event.type === "keyup") {
      if (event.key === "Escape") {
        onClose()
      }
    } else {
      onClose()
    }
  }

  return (
    <div
      className={`react-modal-component${
        isOpen
          ? ""
          : " react-modal-component--close"
      }`}
      onKeyUp={handleClose}
      onClick={handleClose}
    >
      {isOpen && (
        <div
          className={`react-modal-component__overlay${
            overlayClassName
              ? ` ${overlayClassName}`
              : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export { Modal }
