import axios from "axios";

axios.interceptors.request.use((config)=> {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config
})

export function login(user){
    console.log(user)
    return dispatch => {
        axios.post("/auth/login", user).then(response => {
            localStorage.setItem("token", response.data.token);
            const userInfo = response.data;
            dispatch({
                type: "LOGIN",
                user: userInfo.user
            })
        })
        .catch(err => {
            dispatch({
                type: "ERROR",
                err: err.response
            })
        })
    }
}

export function signup(user){
    return dispatch => {
        axios.post("/auth/signup", user).then(response => {
            console.log(response)
            dispatch({
                type: "SIGNUP",
                user: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: "ERROR",
                err: err.response
            })
        })
    }
}

export function persistLogin(token) {
    return dispatch => {axios.post("api/user/persist", token).then(response => {
        dispatch(
            {
                type: "PERSIST",
                user: response.data
            }
        )
    })
  }
}

export function logout(history) {
  localStorage.removeItem("token");
  history.push("/");
  return {
    type: "LOGOUT"
  }
}

const defaultUser = {}

export default function authReducer(prevState = defaultUser, action) {
    switch(action.type) {
        case "LOGIN":
        // may need to do a fetch for their posts
            return {
                user: action.user
            };
        case "SIGNUP":
            return {
                user: action.user
            };
        case "PERSIST":
            return {
                user: action.user
            };
        case "ERROR":
            return {
                err: action.err
            };
        case "LOGOUT":
            return defaultUser;
        default:
            return prevState
    }
}
