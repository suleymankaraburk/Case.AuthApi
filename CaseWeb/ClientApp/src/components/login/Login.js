import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import Form from '../form/Form';

import './login.css'
import axios from '../../../../../node_modules/axios/index';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { Username: "", Password:"" }
        };
    }
    handleChange(e) {
        if (e.target.type === "text") {
            this.state.user.Username = e.target.value;
        
        } else {
            this.state.user.Password = e.target.value;
        }
        
    }
    handleClick = async ()=> {
        if (this.state.user.Username === "") {
            alert("username is required");
            return;
        } else if (this.state.user.Password === "") {
            alert("password is required");
            return;
        }
        var _t = this;
        var model = {
            "Username": _t.state.user.Username,
            "Password": _t.state.user.Password
        }
        console.log(model);
        console.log(JSON.stringify(model));
        await axios.post('http://localhost:5254/api/Account/login', {
            method: 'post',
            data: JSON.stringify(model),
            headers: {
                'Content-type': 'application/json',
                'Accept':'*/*'
            }
        }).then((response) => localStorage.setItem('token', response));

    }

  render () {
      return (
          <div className="login">
              <br />
              <br />
              Login Form
              <Form>
                  <Input type={"text"} placeHolder={"Username"} value={this.state.user.Username} onchange={this.handleChange.bind(this)} />
                  <Input type={"password"} placeHolder={"Password"} value={this.state.user.Password} onchange={this.handleChange.bind(this)} />
                  <Button onClick={this.handleClick.bind(this)} />
              </Form>
           
      </div>
    );
  }
}
