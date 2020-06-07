import React from 'react';
import Alumni from "../components/Alumni";
import { password } from "../auth";
import './Auth.css';

class AlumniAuth extends React.Component {
  state = {
    password: '',
    rightPassword: password,
    auth: false
  }

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }

  doesPasswordMatch() {
    const { password, rightPassword } = this.state;
    return password === rightPassword;
  }

  confirmPasswordClassName() {
    const { password } = this.state;

    if (password) {
      return this.doesPasswordMatch() ? true : false ;
    }
  }

  renderFeedbackMessage() {
    const { password } = this.state;

    if (password) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">패스워드가 일치하지 않습니다</div>
        );
      }
      else
        this.setState({auth: true});

    }
  }


  render() {
    const {auth} = this.state;
    if(!auth) {
      return (
        <div className="auth">
          <form className="my-form">
            <div className="text-area">
              <label htmlFor="passwordInput" >패스워드를 입력하세요 </label> <br/>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={e => this.handleOnPasswordInput(e.target.value)}
              />
              {this.renderFeedbackMessage()}
            </div>
          </form>
        </div>
      );
    }
    else
      return (<Alumni />);
  }
}

export default AlumniAuth;