import axios from "axios";
axios.interceptors.request.use((config)=> {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config
})



export function getAllData(req) {
    console.log(req.user)
    return dispatch => {axios.get("/api/post/").then(response => {
        console.log(response)
        dispatch({
            type: "GET_ALL_DATA",
            data: response.data
        })
    })
  }
}

export function getSpecificData(url) {
    return dispatch => {axios.get(`/api/post/${url}`).then(response => {
        dispatch({
            type: "GET_SPECIFIC_DATA",
            data: response.data
        })
    })
  }
}


export function addData(data) {
    return dispatch => {
        axios.post("/api/post/add", data)
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
        axios.put(`/api/post/${url}`, data)
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
        axios.delete(`/api/post/${url}`)
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
            console.log(action.data)
            const toUpdate = prevState;
            toUpdate.results = [...toUpdate.results, action.data]
            console.log(toUpdate);
            return toUpdate;

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
