import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {signup} from "../../redux/authorization";


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:"",
            firstName:"",
            lastName:""
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
        console.log("pressed")
        this.props.signup(this.state);
        // this.setState({
        //     loginAttempt: true
        // })
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.userLogin.status) {
    //         alert("username or password is incorrect");
    //     } else {
    //         this.props.history.push("/blog");
    //     }
    // }


    render() {
        return(
            <main>
                <div>
                    <h3>Sign Up</h3>
                    <div>
                        <input onChange={this.handleChange} name="username"
                            type="text" placeholder="Username"
                            value={this.state.userName}/>
                        <input onChange={this.handleChange} name="password"
                            type="password" placeholder="Password"
                            value={this.state.password}/>
                        <input onChange={this.handleChange} name="firstName"
                            type="text" placeholder="First Name"
                            value={this.state.firstName}/>
                        <input onChange={this.handleChange} name="lastName"
                            type="text" placeholder="Last Name"
                            value={this.state.lastName}/>

                        <button onClick = {this.onSubmit}>Sign Up</button>
                    </div>
                    <button onClick={()=> this.props.history.push("/login")}>Login</button>
                </div>
                {this.props.userLogin.err &&
                    <div>That username already exists.  Please try another.</div>}
                {this.props.userLogin.user &&
                    <div>Your profile has been created.  Please click the login button to continue.</div>}
            </main>

        )
    }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(
  connect(mapStateToProps, {signup})(SignUp)
);
