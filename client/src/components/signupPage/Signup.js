import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {signup} from "../../redux/authorization";


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username:"",
                password:"",
                firstName:"",
                lastName:""
            },
            validation: ""

            // loginAttempt: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        let propety = e.target.name
        const credentialsCopy = {...this.state.credentials};
        credentialsCopy[e.target.name] = e.target.value
        this.setState({
            credentials: credentialsCopy
        })
    }

    onSubmit(e){
        e.preventDefault();
        if (this.state.credentials.username === "") {
            console.log(this.username)
            this.username = false
            this.setState({validation: "Username"})
            return
        } else if (this.state.credentials.password === "") {
            this.username = false
            this.setState({validation: "Password"})
            return
        } else if (this.state.credentials.firstName === "") {
            this.username = false
            this.setState({validation: "First Name"})
            return
        } else if (this.state.credentials.lastName === "") {
            this.username = false
            this.setState({validation: "Last Name"})
            return
        }
        this.props.signup(this.state.credentials);
    }



    render() {
        let validation = this.state.validation;
        let username = this.props.userLogin.err;
        console.log(username)
        return(
            <main className="form-container">
                <h1 className="info-header">Rate Your Wrath</h1>
                <div className="info-form plus">
                    <h3>Sign Up</h3>
                    <div>
                        <input onChange={this.handleChange} name="username"
                            type="text" placeholder="Username"
                            value={this.state.credentials.userName}
                            autoFocus/>
                        <input onChange={this.handleChange} name="password"
                            type="password" placeholder="Password"
                            value={this.state.credentials.password}/>
                        <input onChange={this.handleChange} name="firstName"
                            type="text" placeholder="First Name"
                            value={this.state.credentials.firstName}/>
                        <input onChange={this.handleChange} name="lastName"
                            type="text" placeholder="Last Name"
                            value={this.state.credentials.lastName}/>
                        {!this.props.userLogin.user &&
                            <button className="form-button" onClick = {this.onSubmit}>Sign Up</button>
                        }
                        {this.props.userLogin.user &&
                            <button className="form-button" onClick={()=> this.props.history.push("/login")}>Login</button>
                        }
                    </div>
                    {validation &&
                        <p className="err-msg">{`${validation} cannot be blank`}</p>

                    }
                    {username &&
                        <p className="err-msg">That username already exists.  Please try another.</p>}
                    {this.props.userLogin.user &&
                        <p className="err-msg">Your profile has been created.  Please click the login button to continue.</p>}
                </div>

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
