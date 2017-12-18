import React from "react";
import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";
import { connect } from "react-redux"
// will need access to the Redux store (prop that determines which modal is used)

const ModalSwitch = props => {
    switch (props.modal.modalChoice) {
        case "ADD_ITEM":
            return <AddModal {...props}/>;
        case "UPDATE_ITEM":
            return <UpdateModal {...props}/>;
        default:
            return null

    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(ModalSwitch);
