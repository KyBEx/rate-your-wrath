import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/authorization";
import Navigation from "../navigation/Navbar";

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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userLogin.status) {
            alert("username or password is incorrect");
        } else {
            this.props.history.push("/blog");
        }
    }


    render() {

        return(
            <main className="form-container">
                <Navigation {...this.props}/>
                <h1 className="info-header">Rate Your Wrath</h1>
                <div className="info-form">
                    <h3>Log In</h3>
                    <div>
                        <form onSubmit={this.onSubmit}>
                        <input onChange={this.handleChange} name="username" type="text" placeholder="Username" value={this.state.userName} autoFocus/>
                        <input onChange={this.handleChange} name="password" type="password" placeholder="Password" value={this.state.password}/>
                        <button className="form-button" onClick = {this.onSubmit}>Login</button>
                        </form>
                    </div>
                    {this.props.userLogin.err &&
                        <p className="err-msg">The username or password you entered is incorrect.</p>}
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
