import React, { Component } from 'react';
import axios from 'axios'
import { Button, Typography, ButtonGroup } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


var sectionStyle = {
    width: "100vw",
    height: "150vh",
    backgroundColor: "#cfd0d1"
};


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
        this.apelare = this.apelare.bind(this);
    }

    apelare() {
        if (localStorage.getItem("userId") !== null) {
            this.props.history.push("/labs");
        }
        else {
            this.props.history.push("/labs");
        }

    }

    showLoginbOX() {
        this.setState({ isRegisterOpen: false, isLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    render() {
        return (<div style={sectionStyle} className="root-container" >
            <div className={"head-controller"}>
                <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginbOX.bind(this)}>
                    Login
                    </div>

                <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                    Register
                    </div>
            </div>

            <div className="box-container">
                {this.state.isLoginOpen && <LoginBox />}
                {this.state.isRegisterOpen && <RegisterBox />}
            </div>
            <div className="btn_menu">
                <Button color="primary" onClick={this.apelare}>Mergi la pagina principala</Button>
            </div>

        </div>

        )
    }
}


class LoginBox extends Component {
    constructor() {
        super();
        this.state = { userName: "", password: "", userId: 0 };
        this.submitLogin = this.submitLogin.bind(this);

    }
    submitLogin() {
        axios.get("http://localhost:8080/api/users?userName=" + this.state.userName + "&Password=" + this.state.password)
            .then((res) => {
                if (res.data === "Logarea a esuat! Ne pare rau! Incearca sa iti creezi mai intai un cont") {
                    alert("Logarea a esuat");
                    return;
                }
                else if (res.data === "Password incorecta!") {
                    alert("Password incorecta!");
                    return;
                }
                else {
                    alert("Te-ai logat!");
                    localStorage.setItem("userId", res.data)
                    localStorage.setItem("userName", this.state.userName)
                    localStorage.setItem("password", this.state.password)
                }

            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const props = this.props
        return (
            <div className="inner-container">
                <div className="header">Login</div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="userName" >Nume utilizator</label>
                        <input type="text" name="userName" className="login-input" placeholder="Nume utilizator" onChange={this.handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Password" >Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.handleChange} />
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin} > Login</button>
                </div>
            </div>
        );
    }
}

class RegisterBox extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', password: '', email: '' }
        this.submitRegister = this.submitRegister.bind(this);
    }
    
    submitRegister() {
       /* const response = await fetch("/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });*/
        axios.post("http://localhost:8080/api/users", { 
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
        })
            .then((res) => {
                alert(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Register
                </div>

                <div className="box">
                    <div className="input-group">
                        <label htmlFor="userName" >Nume utilizator</label>
                        <input type="text" name="userName" className="login-input" placeholder="Nume utilizator" onChange={this.handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />
                    </div>
                    <div className="input-group"                       
 onChange={this.handleChange}>
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)} >Register</button>

                </div>
            </div>
        );
    }
}


export default Login;