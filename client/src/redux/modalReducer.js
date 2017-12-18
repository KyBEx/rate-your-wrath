
export function addModal() {
    return {
        type: "ADD_MODAL",

    }
}

export function updateModal() {
    return {
        type: "UPDATE_MODAL",
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
                modalShow: true,
                name: "Add"
            };
        case "CLOSE_MODAL":
            return {
                modalShow: false
            };
        case "UPDATE_MODAL":
            return {
                modalChoice: "UPDATE_ITEM",
                modalShow: true,
                name: "Update"
            };
        default:
            return prevState
    }
}
