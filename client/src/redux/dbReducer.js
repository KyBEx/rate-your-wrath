import axios from "axios"

export function addData(data) {
    return dispatch => {
        axios.post("/post", data)
            .then(response => {
                dispatch({
                    type: "ADD_DATA",
                    data: response.data
                })
            })
    }
}

export function updateData() {
    return {
        type: "UPDATE_DATA",
    }
}

export function deleteData() {
    return {
        type: "DELETE_DATA",
    }
}

export default function dbReducer(prevState = {}, action) {
    switch(action.type) {
        case "ADD_DATA":
            return prevState
        case "UPDATE_DATA":
            return {
                modalShow: false
            };
        case "DELETE_DATA":
            return {
                modalChoice: "UPDATE_ITEM",
                modalShow: true,
                name: "Update"
            };
        default:
            return prevState
    }
}
