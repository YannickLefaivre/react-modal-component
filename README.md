# React Modal Component

React Modal Component is a fully customizable modal.

> I followed this two tutorials: ["Creating a library of React components using Create React App"](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b) and ["Publish React components as an npm package"](https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f) in order to start the creation of this package.

## 1. Installation

> **Note: You will need at least react 17 to use this package.**

```
npm install @signed-a/react-modal-component
```

## 2. Usage

> **IMPORTANT !** Since version 2.2.0 of the package, if you do not provide the `title` prop no header will be rendered and the `subHeaderContent` prop will have no effect. _Also, the `subHeaderContent` prop replaces the `headerContent` prop that was removed from the modal component._

> **IMPORTANT !** With version 2.2.0, the `footerContent` prop no longer removes the default buttons from the modal. You'll have to explicitly remove them by providing the `hideCancelButton` and `hideConfirmButton` props so the modal won't render them.

### 2.1 Basic

There are two ways to use the Modal component:

- The first is to include it directly at the same level of the component tree as the button that opens it and to use its props to customize its appearance.

```
// routes/Landing.jsx

import {
    Modal,
    useModal,
    MODAL_OPEN_STATE,
} from "@signed-a/react-modal-component/dist"

// don't forget to add the style that participates in the logic of
// opening and closing the modal.
//
// NEW ! Now the modal has a default style.
import "@signed-a/react-modal-component/dist/style.css"

... // other import statements
import "./Landing.style.css"

const Landing = () => {
    const modal = useModal(MODAL_OPEN_STATE.CLOSED)

    return (
        <>
            ...

            <main>
                ...

                <button
                    // retrieve the reference of the open button in
                    // order to give it focus when closing the modal
                    ref={modal.openButtonRef}

                    onClick={modal.open}
                    className="button success-button"
                >
                    Open success modal
                </button>
            </main>

            <Modal
                isOpen={modal.isOpen}
                handleClickOnCloseButton={modal.close}
                handleClickOutside={modal.clickOutside}
                title="Success"
                hideCancelButton
                hideConfirmButton
                styleModifier={{
                    footer: "success-modal__content__footer",
                }}
            >

                <p className="success-modal__content__main__success-text">Employee created!</p>
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

const SpecificModalType = ({
    isOpen,
    handleClickOnCloseButton,
    handleClickOutside,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            handleClickOnCloseButton={handleClickOnCloseButton}
            handleClickOutside={handleClickOnCloseButton}
            title="Success"
            hideConfirmButton
            hideCancelButton
            styleModifier={{
                footer: "success-modal__content__footer",
            }}
        >

            <p className="success-modal__content__main__success-text">Employee created!</p>
        </Modal>
    )
}

// routes/Landing.jsx

import { MODAL_OPEN_STATE, useModal } from "@signed-a/react-modal-component/dist"
import { SpecificModalType } from "./path/to/your/component/library/folder"
... // other import statements

const Landing = () => {
    const modal = useModal(MODAL_OPEN_STATE.CLOSED)

    return (
        <>
            ...

            <main>
                ...

                <button
                    // retrieve the reference of the open button in
                    // order to give it focus when closing the modal
                    ref={modal.openButtonRef}

                    onClick={modal.open}
                    className="button success-button"
                >
                    Open success modal
                </button>
            </main>

            <SpecificModalType
                isOpen={modal.isOpen}
                handleClickOnCloseButton={modal.close}
                handleClickOutside={modal.clickOutside}
            />
        </>
    )
}
```

## 2. Consult the documentation

Documentation of the code can be found in the docs folder. By opening the [project github page](https://yannicklefaivre.github.io/react-modal-component/), you will have access to this file _(README.md)_ as well as to the documentation of the modal component.
