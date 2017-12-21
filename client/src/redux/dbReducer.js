import axios from "axios"

// export function getData(query) {
//     function getProps(query){const propNames = Object.getOwnPropertyNames(query);
//         const queryStrings = propNames.map(propName => {
//             return propName+"="+query[propName]
//         })
//             return queryStrings
//         }
//     const qParams = query ? getProps(query) : null
//     return dispatch => {
//         axios.get(`/post?${qParams}`)
//         .then(response => {
//             dispatch({
//                 type: "GET_DATA",
//                 data: response.data
//             })
//         })
//     }
// }

export function getAllData() {
    return dispatch => {axios.get("/post").then(response => {
        dispatch({
            type: "GET_ALL_DATA",
            data: response.data
        })
    })
  }
}

export function getSpecificData(url) {
    return dispatch => {axios.get(`./post/${url}`).then(response => {
        dispatch({
            type: "GET_SPECIFIC_DATA",
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

export function updateData(url) {
    return dispatch => {
        axios.put(`/post/${url}`)
        .then(response => {
            dispatch({
                type: "UPDATE_DATA",
            })
        })
    }
}

export function deleteData(url) {
    return dispatch => {
        axios.delete(`/post/${url}`)
        .then(response => {
            dispatch({
                type:"DELETE_DATA",
                data: response.data
            })
        })
    }
}
const initialState= {results: [],
                    update: {date:"i",
                    hellion:"i",
                    frustration:"i",
                    severity:"i",
                    message:"i",
                    punishment:"i",
                    punDone:"i"}
                    }
export default function dbReducer(prevState = initialState, action) {
    switch(action.type) {
        case "ADD_DATA":
            return prevState;

        case "GET_SPECIFIC_DATA":
            return {
                results: prevState.results,
                update: action.data
            };

        case "UPDATE_DATA":
            return {
                update: action.data
            };

        case "GET_ALL_DATA":
            return {
                results: action.data,
                update: prevState.update
            };

        case "DELETE_DATA":
            const results = [...prevState.results];
            const newResults = results.filter(item => item._id !== action.data.item._id
            );
            return {results: newResults}

        default:
            return prevState
    }
}
