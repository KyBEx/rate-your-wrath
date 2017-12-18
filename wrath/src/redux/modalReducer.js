
export function addModal() {
    return {
        type: "ADD_MODAL",

    }
}

export function closeModal() {
    return {
        type: "CLOSE_MODAL",
    }
}

export default function modalReducer(prevState = {}, action) {
    switch(action.type) {
        case "ADD_MODAL":
            return {
                modalChoice: "ADD_ITEM",
                modalShow: true
            };
        case "CLOSE_MODAL":
            return {
                modalShow: false
            };

        default:
            return prevState
    }
}
