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
            dispatch({
                type: "LOGIN",
                user: userInfo.user
            })
            // console.log(userInfo);
            // axios.post("/api/post/", userInfo).then(response => {
            //     console.log(response.data)
            //     dispatch({
            //         type: "LOGIN",
            //         user: userInfo,
            //         userPosts: response.data
            //     });
            // })

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


export default function authReducer(prevState = {}, action) {
    switch(action.type) {
        case "LOGIN":
        // may need to do a fetch for their posts
            return {
                user: action.user,
            };
        case "SIGNUP":
            return {
                msg: action.msg
            };
        case "PERSIST":
            return {
                user: action.user
            };
        default:
            return prevState
    }
}
