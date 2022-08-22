import PropTypes from "prop-types"
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
 * @param {SuccessModalProps} SuccessModalProps
 *
 * @returns {JSX.Element}
 */
const SuccessModal = ({
  isOpen,
  handleClickOutside,
  handleClickOnCloseButton,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClickOutside={handleClickOutside}
      handleClickOnCloseButton={
        handleClickOnCloseButton
      }
      buttonsForm="signup-form"
      styleModifier={{ overlay: "signup-modal" }}
    >
      <p className="signup-modal__description">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi aliquam purus magna,
        et vulputate dolor hendrerit sed. Phasellus
        posuere ante vitae risus mollis, id gravida
        libero finibus.
      </p>

      <form
        id="signup-form"
        action="#"
        className="signup-form"
      >
        <fieldset>
          <legend className="signup-form__fieldset__legend">
            Identity
          </legend>

          <div className="signup-form__fieldset__field">
            <label htmlFor="first-name">
              First name:
            </label>

            <input
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>

          <div className="signup-form__fieldset__field">
            <label htmlFor="last-name">
              Last name:
            </label>

            <input
              type="text"
              name="last-name"
              id="last-name"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="signup-form__fieldset__legend">
            Credentials
          </legend>

          <div className="signup-form__fieldset__field">
            <label htmlFor="email">Email:</label>

            <input
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="signup-form__fieldset__field">
            <label htmlFor="password">
              Password:
            </label>

            <input
              type="text"
              name="password"
              id="password"
            />
          </div>
        </fieldset>
      </form>
    </Modal>
  )
}

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
  handleClickOnCloseButton:
    PropTypes.func.isRequired,
}

export { SuccessModal }
