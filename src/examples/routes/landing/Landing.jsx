import { useRef, useState } from "react"
import { SuccessModal } from "../../components/SuccessModal"
import "./Landing.style.css"

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openButtonRef = useRef(null)

  const handleClose = () => {
    setIsOpen(false)

    openButtonRef.current.focus()
  }

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
          open button or as in this example, by
          wrapping it in a custom modal component.
        </p>

        <button
          ref={openButtonRef}
          onClick={() => setIsOpen(true)}
          className="button success-button"
        >
          Open success modal v2
        </button>
      </main>

      <SuccessModal
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </>
  )
}

export { Landing }
