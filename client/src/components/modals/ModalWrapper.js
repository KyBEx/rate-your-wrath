import React from "react";
import { connect } from "react-redux";
import {closeModal} from "../../redux/modalReducer";


// will need access to action from store (closing the modal)

const ModalWrapper = props => {

    const closeModal = () => {
        props.closeModal();
    }
    return (
        <div className="modal form">
            <h4 className = "modal-stuff inline head">{props.modal.type} Your Wrath</h4>
            <button className = "close-button search-button" onClick = {closeModal}>Close</button>
            {props.children}

        </div>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {closeModal})(ModalWrapper)
