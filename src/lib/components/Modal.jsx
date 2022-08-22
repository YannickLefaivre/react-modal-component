import React, { useEffect } from "react"
import PropTypes from "prop-types"
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
 * @property {ReactNode} children Represents the
 * content of the modal.
 *
 * @property {onClose} onClose The callback function
 * that sets isOpen to false.
 *
 *  - This is used to close the modal when clicking
 *  on the background or pressing the `Escape` key.
 *
 *
 * @property {String} [overlayClassName=""] Allows to
 * customize the style of the background of the
 * modal.
 *
 * - You can name your class whatever you want as
 * long as you don't use the package namespace:
 * `.react-modal-component*`.
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
 */
const Modal = ({
  isOpen,
  children,
  handleClickOutside,
  handleClickOnCloseButton,
  handleConfirm,
  handleCancel,
  buttonsForm,
  title,
  additionalHeaderContent,
  additionalFooterContent,
  closeButtonIcon,
  showTitle,
  showCancelButton,
  showConfirmButton,
  cancelButtonOptions,
  confirmButtonOptions,
  styleModifier,
}) => {
  return (
    <div
      id="react-modal-component-root"
      className={`react-modal-component${
        isOpen
          ? ""
          : " react-modal-component--close"
      }`}
      onClick={handleClickOutside}
    >
      <div
        id="react-modal-component-overlay"
        className={`react-modal-component__overlay${
          styleModifier?.overlay
            ? ` ${styleModifier?.overlay}`
            : ""
        }`}
      >
        <div
          className={`react-modal-component__content${
            styleModifier?.contentContainer
              ? ` ${styleModifier.contentContainer}`
              : ""
          }`}
        >
          <button
            type="button"
            autoFocus
            onClick={handleClickOnCloseButton}
            className={`react-modal-component__button react-modal-component__content__close-button${
              styleModifier?.closeButton
                ? styleModifier?.closeButton
                : ""
            }`}
          >
            {closeButtonIcon ? (
              closeButtonIcon
            ) : (
              <svg
                width={32}
                height={32}
                viewBox="0 0 320 512"
                className={`react-modal-component__content__close-button__icon${
                  styleModifier?.closeButtonIcon
                    ? styleModifier?.closeButtonIcon
                    : ""
                }`}
              >
                {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>

          <header
            className={`react-modal-component__content__header${
              styleModifier?.header
                ? ` ${styleModifier?.header}`
                : ""
            }`}
          >
            {showTitle && (
              <h2
                className={`react-modal-component__content__header__title${
                  styleModifier &&
                  styleModifier.title
                    ? ` ${styleModifier.title}`
                    : ""
                }`}
              >
                {title}
              </h2>
            )}

            {additionalHeaderContent &&
              additionalHeaderContent}
          </header>

          <main
            className={`react-modal-component__content__main${
              styleModifier?.mainContent
                ? ` ${styleModifier?.mainContent}`
                : ""
            }`}
          >
            {children}
          </main>

          <footer
            className={`react-modal-component__content__footer${
              styleModifier?.footer
                ? ` ${styleModifier?.footer}`
                : ""
            }`}
          >
            {additionalFooterContent &&
              additionalFooterContent}

            {showConfirmButton && (
              <button
                type="submit"
                name={
                  confirmButtonOptions?.confirmButtonName
                    ? confirmButtonOptions?.confirmButtonName
                    : "react-modal-component-confirm-button"
                }
                onClick={handleConfirm}
                form={buttonsForm}
                formNoValidate={
                  confirmButtonOptions?.formNoValidate
                }
                formAction={
                  confirmButtonOptions?.formAction
                }
                formEncType={
                  confirmButtonOptions?.formEncType
                }
                formMethod={
                  confirmButtonOptions?.formMethod
                }
                formTarget={
                  confirmButtonOptions?.formTarget
                }
                className={`react-modal-component__button${
                  styleModifier?.confirmButton
                    ? ` ${styleModifier.confirmButton}`
                    : ""
                }`}
              >
                {confirmButtonOptions?.content
                  ? confirmButtonOptions?.content
                  : "Confirmer"}
              </button>
            )}

            {showCancelButton && (
              <button
                type="reset"
                name={
                  cancelButtonOptions?.cancelButtonName
                    ? cancelButtonOptions?.cancelButtonName
                    : "react-modal-component-cancel-button"
                }
                onClick={handleCancel}
                form={buttonsForm}
                className={`react-modal-component__button${
                  styleModifier?.cancelButton
                    ? styleModifier?.cancelButton
                    : ""
                }`}
              >
                {cancelButtonOptions?.cancelButtonContent
                  ? cancelButtonOptions?.cancelButtonContent
                  : "Annuler"}
              </button>
            )}
          </footer>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
  handleClickOnCloseButton:
    PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  buttonsForm: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,

  cancelButtonOptions: PropTypes.exact({
    cancelButtonName: PropTypes.string,
    cancelButtonContent: PropTypes.node,
  }),

  confirmButtonOptions: PropTypes.exact({
    confirmButtonName: PropTypes.string,
    formNoValidate: PropTypes.bool,
    formAction: PropTypes.string,
    formEncType: PropTypes.string,
    formMethod: PropTypes.string,
    formTarget: PropTypes.string,
    content: PropTypes.node,
  }),

  styleModifier: PropTypes.exact({
    overlay: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
    mainContent: PropTypes.string,
    footer: PropTypes.string,
    cancelButton: PropTypes.string,
    confirmButton: PropTypes.string,
    closeButton: PropTypes.string,
    closeButtonIcon: PropTypes.string,
  }),

  closeButtonIcon: PropTypes.node,
  additionalFooterContent: PropTypes.node,
  additionalHeaderContent: PropTypes.node,
}

Modal.defaultProps = {
  handleCancel: () => {},
  handleConfirm: () => {},
  buttonsForm: "",
  title: "Modal title",
  showTitle: true,
  showCancelButton: true,
  showConfirmButton: true,
  styleModifier: {
    overlay: "",
    header: "",
    title: "",
    mainContent: "",
    footer: "",
    confirmButton: "",
    cancelButton: "",
    closeButton: "",
    closeButtonIcon: "",
  },
}

export { Modal }
