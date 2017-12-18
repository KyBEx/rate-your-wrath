import React from "react";
import ModalWrapper from "./ModalWrapper";



const UpdateModal = props => {
    let show = props.modal.modalShow ? true : false;


    return (
        <main>
        {show && <ModalWrapper>
            <div>
                <p>Update info</p>
            </div>
        </ModalWrapper>}
        </main>

    )
}


export default UpdateModal
