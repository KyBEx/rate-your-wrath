import React from "react";
import { connect } from "react-redux";
import {closeModal} from "../../redux/modalReducer";

// will need access to action from store (closing the modal)

const ModalWrapper = props => {

    const closeModal = () => {
        props.closeModal();
    }
    return (
        <div>
        <header>
            <h4>{props.modal.name} Your Wrath</h4>
            <button onClick = {closeModal}>Close</button>
        </header>
        {props.children}
        </div>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {closeModal})(ModalWrapper)
