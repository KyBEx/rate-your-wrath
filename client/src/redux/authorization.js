import axios from "axios";

axios.interceptors.request.use((config)=> {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config
})

export function login(user){
    return dispatch => {
        axios.post("/auth/login", user).then(response => {
            localStorage.setItem("token", response.data.token);
            const userInfo = response.data;
            axios.post("/api/post/", userInfo).then(response => {
                dispatch({
                    type: "LOGIN",
                    user: userInfo,
                    userPosts: response.data
                });
            })

        })
    }
}

export function signup(user){
    return dispatch => {
        axios.post("/auth/signup", user).then(response => {
            dispatch({
                type: "SIGNUP",
                user: response.data
            })
        })
    }
}

const defaultUser = {};

export default function authReducer(prevState = defaultUser, action) {
    switch(action.type) {
        case "LOGIN":
        // may need to do a fetch for their posts
            return {
                token: action.user.token,
            };
        case "SIGNUP":
            return {
                msg: action.msg
            }
    }
}
