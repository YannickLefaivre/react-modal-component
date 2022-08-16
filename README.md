# React Modal Component

React Modal Component is a fully customizable modal.

> I followed the tutorial ["Creating a library of React components using Create React App"](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b) in order to create this package.

## 1. Installation

### 1.1 prerequisites

**You will need at least react@17.0.2 to use this package.**

If you have a higher version, you will need to downgrade your project. To do this, you must delete your _package-lock.json_ file and your _node_modules_ directory.

Then uninstall your current version of react and react-dom with the command `npm uninstall react react-dom.`

Then, reinstall all your packages with the command `npm install` and install react 17 with the command `npm install react@17.0.2 react-dom@17.0.2`

> After downgrading your project, you may encounter problems with other packages, such as @testing-library/react. You can check for yourself which version of testing-library/react supports react 17 or simply install @testing-library/react@11.1.0 after uninstalling its currently installed version.

### 1.2 To start using the package

```
npm install @signed-a/react-modal-component
```

## 2. Usage

### 2.1 Basic

There are two ways to use the Modal component:

- One is to simply use it as is, while assigning it your own design with the overlay customization class and the addition of child elements.

```
// routes/Landing.jsx

import { useState } from "react"
import { Modal } from "@signed-a/react-modal-component/dist"

// don't forget to add the style that participates
// in the logic of opening and closing the modal.
import "@signed-a/react-modal-component/dist/style.css"

... // other import statements
import "./SpecificModalType.style.css"

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <h1>Example modal</h1>
            </header>

            <main>
                <button
                    onClick={() => setIsOpen(true)}
                    className="button success-button"
                >
                    Open success modal
                </button>
            </main>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                overlayClassName="success-modal"
            >
                <div
                    className="success-modal__content"
                >
                    <p>Employee created!</p>

                    <button
                        autoFocus
                        onClick={() => setIsOpen(false)}
                        className="button"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </>
    )
}
```

- And the other, to encapsulate it in your different types of modal component (simple modal, lightbox, etc...). To include, your modal presets/customizations in your own component library.

```
// component-library/SpecificModalType.jsx

import { Modal } from "@signed-a/react-modal-component/dist"
import "@signed-a/react-modal-component/dist/style.css"
... // other import statements
import "./SpecificModalType.style.css"

const SpecificModalType = ({ isOpen, handleClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            overlayClassName="success-modal"
        >
            <div
                className="success-modal__content"
            >
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

// routes/Landing.jsx

import { useState } from "react"
import { SpecificModalType } from "./path/to/your/component/folder"
... // other import statements

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <h1>Example modal</h1>
            </header>

            <main>
                <button
                    onClick={() => setIsOpen(true)}
                    className="button success-button"
                >
                    Open success modal
                </button>
            </main>

            <SpecificModalType
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
            />
        </>
    )
}
```

### 2.2 Advanced

To put the focus back on the last item that was active before the modal was opened. Use the useRef hook to retrieve the reference of this element and use its current property to give it focus when closing the modal:

```
// routes/Landing.jsx

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

        <main>
          <button
            ref={openButtonRef}
            onClick={() => setIsOpen(true)}
            className="button success-button"
          >
            Open success modal
          </button>
        </main>

        <SpecificModalType
          isOpen={isOpen}
          handleClose={handleClose}
        />
      </>
    )
}
```

## 2. Consult the documentation

Documentation of the code can be found in the docs folder. By opening the [project github page](https://yannicklefaivre.github.io/react-modal-component/), you will have access to this file _(README.md)_ as well as to the documentation of the modal component.
