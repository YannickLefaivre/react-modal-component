import React from "react"
import PropTypes from "prop-types"
import "./Modal.css"

/**
 * Used to define the parameters of the form
 * associated with the confirmation button, modify
 * the value of its name attribute and replace its
 * text with another text, an element or a component.
 *
 * @typedef {Object} ConfirmButtonOptions
 *
 * @property {String} name
 * [See the MDN reference of the \<button\> element `name` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-name}
 *
 * @property {Boolean} formNoValidate
 * [See the MDN reference of the \<button\> element `formNoValidate` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate}
 *
 * @property {String} formAction
 * [See the MDN reference of the \<button\> element `formAction` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction}
 *
 * @property {String} formEncType
 * [See the MDN reference of the  \<button\> element `formEncType` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype}
 *
 * @property {String} formMethod
 * [See the MDN reference of the  \<button\> element `formMethod` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod}
 *
 * @property {String} formTarget
 * [See the MDN reference of the \<button\> element `formTarget` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget}
 *
 * @property {String | React.ReactNode} content
 * Allows you to replace the default button text
 * with an element (e.g. an SVG icon), a component
 * or a string.
 *
 */

/**
 * Allows you to modify the style of the different
 * elements of the modal by adding additional CSS
 * classes to them.
 *
 * @typedef {Object} ModalStyleModifier
 *
 * @property {String} backdrop
 *
 * @property {String} contentContainer
 *
 * @property {String} header
 *
 * @property {String} title
 *
 * @property {String} mainContent
 *
 * @property {String} footer
 *
 * @property {String} confirmButton
 *
 * @property {String} cancelButton
 *
 * @property {String} closeButton
 *
 * @property {String} closeButtonIcon
 */

/**
 * @typedef {Object} ModalProps
 *
 * @property {Boolean} isOpen
 *
 * @property {React.ReactNode} children
 * Represents the main content of the modal that
 * will be displayed between the header and the
 * footer.
 *
 * @property {VoidFunction} handleClickOutside
 * Manages the closing of the modal when the user
 * clicks on the latter's backdrop.
 *
 * [See the type definition of this callback in the useModal module.]{@link module:useModal~clickOutsideCallback}
 *
 * @property {VoidFunction} handleClickOnCloseButton
 *
 * @property {Function} [handleConfirm=() => {}]
 *
 * @property {Function} [handleCancel=() => {}]
 *
 * @property {String} [buttonsForm=""]
 * [See the MDN reference of the \<button\> element `form` attribute]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-form}
 *
 * @property {String} [title="Modal title"]
 *
 * @property {Boolean} [animationEnabled=false]
 *
 * @property {Boolean} [hideTitle=true]
 *
 * @property {Boolean} [hideCancelButton=true]
 *
 * @property {Boolean} [hideConfirmButton=true]
 *
 * @property {ConfirmButtonOptions} [confirmButtonOptions]
 *
 * @property {ModalStyleModifier} [styleModifier]
 *
 * @property {React.ReactNode} [closeButtonIcon]
 *
 * @property {React.ReactNode} [headerContent]
 *
 * @property {React.ReactNode} [footerContent]
 *
 * @property {String | React.ReactNode} [cancelButtonContent]
 * Allows you to replace the default cancel button
 * text with an element (e.g. an SVG icon), a
 * component or a string.
 */

/**
 * Provides the structure of a modal with:
 *
 *  - A header with the title of the latter,
 *  - An empty body which can be filled with the `children` prop,
 *  - A footer with a confirmation button and a button
 *    cancellation belonging to the form whose `id` corresponds
 *    to the value of the `buttonsForm` prop.
 *
 * @function
 *
 * @param {ModalProps} ModalProps
 *
 * @returns {JSX.Element} The modal component
 *
 * @example
 *
 * const SignupModal = ({
 *  isOpen,
 *  handleClickOutside,
 *  handleClickOnCloseButton,
 * }) => {
 *  return (
 *    <Modal
 *      isOpen={isOpen}
 *      handleClickOutside={handleClickOutside}
 *      handleClickOnCloseButton={
 *        handleClickOnCloseButton
 *      }
 *      buttonsForm="signup-form"
 *      headerContent={
 *        <>
 *          <h2 className="signup-modal__header__title">Inscription</h2>
 *          <p className="signup-modal__header__subtitle">
 *            Création d'un compte utilisateur
 *          </p>
 *        </>
 *      }
 *      hideCancelButton
 *      confirmButtonOptions={{
 *        name: "signup-form-submit-button",
 *        content: "S'inscrire",
 *      }}
 *      styleModifier={{
 *        backdrop: "signup-modal",
 *        header: "signup-modal__header",
 *        confirmButton: "signup-modal__footer__confirm-button",
 *      }}
 *    >
 *      <form
 *        id="signup-form"
 *        action="#"
 *        className="signup-form"
 *      >
 *        <fieldset>
 *          <legend className="signup-form__fieldset__legend">
 *            Identity
 *          </legend>
 *
 *          <div className="signup-form__fieldset__field">
 *            <label htmlFor="first-name">
 *              First name:
 *            </label>
 *
 *            <input
 *              type="text"
 *              name="first-name"
 *              id="first-name"
 *            />
 *          </div>
 *
 *          <div className="signup-form__fieldset__field">
 *            <label htmlFor="last-name">
 *              Last name:
 *            </label>
 *
 *            <input
 *              type="text"
 *              name="last-name"
 *              id="last-name"
 *            />
 *          </div>
 *        </fieldset>
 *
 *        <fieldset>
 *          <legend className="signup-form__fieldset__legend">
 *            Credentials
 *          </legend>
 *
 *          <div className="signup-form__fieldset__field">
 *            <label htmlFor="email">Email:</label>
 *
 *            <input
 *              type="text"
 *              name="email"
 *              id="email"
 *            />
 *          </div>
 *
 *          <div className="signup-form__fieldset__field">
 *            <label htmlFor="password">
 *              Password:
 *            </label>
 *
 *            <input
 *              type="text"
 *              name="password"
 *              id="password"
 *            />
 *          </div>
 *        </fieldset>
 *      </form>
 *    </Modal>
 *  )
 * }
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
  animationEnabled,
  hideTitle,
  hideCancelButton,
  hideConfirmButton,
  confirmButtonOptions,
  styleModifier,
  closeButtonIcon,
  headerContent,
  footerContent,
  cancelButtonContent,
}) => {
  return (
    <div
      id="react-modal-component-root"
      className={`react-modal-component${
        isOpen ? "" : " react-modal-component--close"
      }`}
      onClick={handleClickOutside}
    >
      <div
        id="react-modal-component-backdrop"
        className={`react-modal-component-backdrop${
          styleModifier?.backdrop ? ` ${styleModifier?.backdrop}` : ""
        }${
          animationEnabled
            ? " react-modal-component__backdrop--animation-enabled"
            : ""
        }`}
      >
        {isOpen && (
          <div
            className={`react-modal-component__content${
              styleModifier?.contentContainer
                ? ` ${styleModifier.contentContainer}`
                : ""
            }`}
          >
            <button
              type="reset"
              autoFocus
              form={buttonsForm}
              onClick={handleClickOnCloseButton}
              className={`react-modal-component__button react-modal-component__content__close-button${
                styleModifier?.closeButton
                  ? styleModifier?.closeButton
                  : ""
              }${
                animationEnabled
                  ? " react-modal-component__button--transition-enabled"
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
              {headerContent
                ? headerContent
                : !hideTitle && (
                    <h2
                      className={`react-modal-component__content__header__title${
                        styleModifier && styleModifier.title
                          ? ` ${styleModifier.title}`
                          : ""
                      }`}
                    >
                      {title}
                    </h2>
                  )}
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
              {footerContent ? (
                footerContent
              ) : (
                <>
                  {!hideConfirmButton && (
                    <button
                      type="submit"
                      name={
                        confirmButtonOptions?.name
                          ? confirmButtonOptions?.name
                          : "react-modal-component-confirm-button"
                      }
                      onClick={handleConfirm}
                      form={buttonsForm}
                      formNoValidate={
                        confirmButtonOptions?.formNoValidate
                      }
                      formAction={confirmButtonOptions?.formAction}
                      formEncType={confirmButtonOptions?.formEncType}
                      formMethod={confirmButtonOptions?.formMethod}
                      formTarget={confirmButtonOptions?.formTarget}
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

                  {!hideCancelButton && (
                    <button
                      type="reset"
                      onClick={handleCancel}
                      form={buttonsForm}
                      className={`react-modal-component__button${
                        styleModifier?.cancelButton
                          ? styleModifier?.cancelButton
                          : ""
                      }`}
                    >
                      {cancelButtonContent
                        ? cancelButtonContent
                        : "Annuler"}
                    </button>
                  )}
                </>
              )}
            </footer>
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
  handleClickOnCloseButton: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  buttonsForm: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  animationEnabled: PropTypes.bool.isRequired,
  hideTitle: PropTypes.bool,
  hideCancelButton: PropTypes.bool,
  hideConfirmButton: PropTypes.bool,

  confirmButtonOptions: PropTypes.exact({
    name: PropTypes.string,
    formNoValidate: PropTypes.bool,
    formAction: PropTypes.string,
    formEncType: PropTypes.string,
    formMethod: PropTypes.string,
    formTarget: PropTypes.string,
    content: PropTypes.node,
  }),

  styleModifier: PropTypes.exact({
    backdrop: PropTypes.string,
    header: PropTypes.string,
    contentContainer: PropTypes.string,
    title: PropTypes.string,
    mainContent: PropTypes.string,
    footer: PropTypes.string,
    cancelButton: PropTypes.string,
    confirmButton: PropTypes.string,
    closeButton: PropTypes.string,
    closeButtonIcon: PropTypes.string,
  }),

  closeButtonIcon: PropTypes.node,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
  cancelButtonContent: PropTypes.node,
}

Modal.defaultProps = {
  handleCancel: () => {},
  handleConfirm: () => {},
  buttonsForm: "",
  title: "Modal title",
  animationEnabled: false,
  hideTitle: false,
  hideCancelButton: false,
  hideConfirmButton: false,
  styleModifier: {},
}

export { Modal }
