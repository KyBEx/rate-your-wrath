import React from "react";
import { connect } from "react-redux";
import {closeModal} from "../../redux/modalReducer";

// will need access to action from store (closing the modal)

const ModalWrapper = props => {

    const closeModal = () => {
        props.closeModal();
    }
    return (
        <header>
        <div>
            <h1>Modal Test</h1>
            <button onClick = {closeModal}>Close</button>
        </div>
        </header>
    )
}

export default connect(null, {closeModal})(ModalWrapper)
