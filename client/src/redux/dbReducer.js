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

export function updateData(url, data) {
    return dispatch => {
        axios.put(`/post/${url}`, data)
        .then(response => {
            dispatch({
                type: "UPDATE_DATA",
                data: response.data
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
                    update: {date:"",
                    hellion:"",
                    frustration:"",
                    severity:"",
                    message:"",
                    punishment:"",
                    punDone:"",
                    id: "",}
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
            const origResults = [...prevState.results];
            const updatedResults = origResults.filter(item => item._id !== action.data._id);
            updatedResults.push(action.data)
            return {
                results: updatedResults,
                update: prevState.update
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
            return {results: newResults,
                    update: prevState.update}

        default:
            return prevState
    }
}
