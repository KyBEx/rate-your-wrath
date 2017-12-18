import React from "react";
import ModalWrapper from "./ModalWrapper";
// will need access to action from store (closing the modal), but maybe
// that close function can come from modalWrapper


const AddModal = props => {
    let show = props.modal.modalShow ? true : false;


    return (
        <main>
        {show && <ModalWrapper>
                <div>
                    <p>Add info</p>
                </div>
        </ModalWrapper>}
        </main>

    )
}


export default AddModal
