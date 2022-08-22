import {
  MODAL_OPENING_STATE,
  useModal,
} from "../../../lib"
import { SuccessModal } from "../../components/SuccessModal"
import "./Landing.style.css"

const Landing = () => {
  const modal = useModal(MODAL_OPENING_STATE.CLOSED)

  return (
    <>
      <header>
        <h1>Example modal</h1>
      </header>

      <main className="main-content main-content--landing">
        <p className="example-description">
          You can use the Modal component in
          different ways either by including it
          directly in the component that holds the
          open button or by wrapping it in a custom
          modal component.
        </p>

        <button
          ref={modal.openButtonRef}
          onClick={modal.open}
          className="button success-button"
        >
          Open success modal v2
        </button>
      </main>

      <SuccessModal
        isOpen={modal.isOpen}
        handleClickOutside={modal.clickOutside}
        handleClickOnCloseButton={modal.close}
      />
    </>
  )
}

export { Landing }
