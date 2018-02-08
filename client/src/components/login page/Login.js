import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/authorization";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:"",
            // loginAttempt: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.login(this.state);
        // this.setState({
        //     loginAttempt: true
        // })
    }

    componentWillReceiveProps(nextProps) {
        console.log("hello");
        if (nextProps.userLogin.status) {
            alert("username or password is incorrect");
        } else {
            this.props.history.push("/blog");
        }
    }


    render() {
        return(
            <main>
                <div>
                    <h3>Log In</h3>
                    <div>
                        <input onChange={this.handleChange} name="username" type="text" placeholder="Username" value={this.state.userName}/>
                        <input onChange={this.handleChange} name="password" type="password" placeholder="Password" value={this.state.password}/>
                        <button onClick = {this.onSubmit}>Login</button>
                    </div>
                </div>
            </main>

        )
    }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(
  connect(mapStateToProps, {login})(Login)
);
