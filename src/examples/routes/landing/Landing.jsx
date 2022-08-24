import { MODAL_OPEN_STATE, useModal } from "../../../lib"
import { SignupModal } from "../../components/SignupModal"
import "./Landing.style.css"

const Landing = () => {
  const modal = useModal(MODAL_OPEN_STATE.CLOSED, "signup-form")

  return (
    <>
      <header>
        <h1>Example modal</h1>
      </header>

      <main className="main-content main-content--landing">
        <p className="example-description">
          You can use the Modal component in different ways either by
          including it directly in the component that holds the open
          button or by wrapping it in a custom modal component.
        </p>

        <button
          ref={modal.openButtonRef}
          onClick={modal.open}
          className="button success-button"
        >
          Subscribe
        </button>
      </main>

      <SignupModal
        isOpen={modal.isOpen}
        handleClickOutside={modal.clickOutside}
        handleClickOnCloseButton={modal.close}
      />
    </>
  )
}

export { Landing }
