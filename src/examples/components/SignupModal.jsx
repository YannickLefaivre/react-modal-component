import PropTypes from "prop-types"
import { Modal } from "../../lib"
import "./SignupModal.style.css"

/**
 * @typedef {Object} SignupModalProps
 *
 * @property {Boolean} isOpen
 * @property {(event: MouseEvent) => void} handleClickOutside
 * @property {() => void} handleClickOnCloseButton
 */

/**
 * @param {SignupModalProps} SuccessModalProps
 *
 * @returns {JSX.Element}
 */
const SignupModal = ({
  isOpen,
  handleClickOutside,
  handleClickOnCloseButton,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClickOutside={handleClickOutside}
      handleClickOnCloseButton={handleClickOnCloseButton}
      buttonsForm="signup-form"
      headerContent={
        <>
          <h2 className="signup-modal__header__title">Inscription</h2>
          <p className="signup-modal__header__subtitle">
            Création d'un compte utilisateur
          </p>
        </>
      }
      hideCancelButton
      confirmButtonOptions={{
        name: "signup-submit-button",
        content: "S'inscrire",
      }}
      styleModifier={{
        backdrop: "signup-modal",
        header: "signup-modal__header",
        confirmButton: "signup-modal__footer__confirm-button",
      }}
    >
      <form id="signup-form" action="#" className="signup-form">
        <fieldset>
          <legend className="signup-form__fieldset__legend">
            Identity
          </legend>

          <div className="signup-form__fieldset__field">
            <label htmlFor="first-name">First name:</label>

            <input type="text" name="first-name" id="first-name" />
          </div>

          <div className="signup-form__fieldset__field">
            <label htmlFor="last-name">Last name:</label>

            <input type="text" name="last-name" id="last-name" />
          </div>
        </fieldset>

        <fieldset>
          <legend className="signup-form__fieldset__legend">
            Credentials
          </legend>

          <div className="signup-form__fieldset__field">
            <label htmlFor="email">Email:</label>

            <input type="text" name="email" id="email" />
          </div>

          <div className="signup-form__fieldset__field">
            <label htmlFor="password">Password:</label>

            <input type="text" name="password" id="password" />
          </div>
        </fieldset>
      </form>
    </Modal>
  )
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
  handleClickOnCloseButton: PropTypes.func.isRequired,
}

export { SignupModal }
