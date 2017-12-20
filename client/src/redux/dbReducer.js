import axios from "axios"

export function getData(query) {
    function getProps(query){const propNames = Object.getOwnPropertyNames(query);
        const queryStrings = propNames.map(propName => {
            return propName+"="+query[propName]
        })
            return queryStrings
        }
    const qParams = query ? getProps(query) : null
    return dispatch => {
        axios.get(`/post?${qParams}`)
        .then(response => {
            dispatch({
                type: "GET_DATA",
                data: response.data
            })
        })
    }
}

export function getAllData() {
    return dispatch => {axios.get("/post").then(response => {
        dispatch({
            type: "GET_ALL_DATA",
            data: response.data
        })
    })
  }
}


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
        // case "UPDATE_DATA":
        //     return {
        //         modalShow: false
        //     };
        case "GET_DATA":
            return {
                results: action.data,
                filterData: prevState.filterData
            };
        case "GET_ALL_DATA":
            return {
                results: action.data,
                filterData: action.data
            }
        // case "DELETE_DATA":
        //     return {
        //         modalChoice: "UPDATE_ITEM",
        //         modalShow: true,
        //         name: "Update"
        //     };
        default:
            return prevState
    }
}
