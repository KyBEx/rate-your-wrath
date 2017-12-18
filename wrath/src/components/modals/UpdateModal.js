import React from "react";
import ModalWrapper from "./ModalWrapper";
// will need access to action from store (closing the modal), but maybe
// that close function can come from modalWrapper


const AddModal = props => {
    let show = props.modal.modalShow ? true : false;
    console.log(props.modalShow)

    return (
        <main>
        {show && <ModalWrapper>
            <div>
                <a>Click here to close</a>
            </div>
        </ModalWrapper>}
        </main>

    )
}


export default AddModal
