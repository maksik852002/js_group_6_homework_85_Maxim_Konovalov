import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../store/actions/usersActions";
import './RegisterLoginForm.css'

class RegisterLoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    this.props.match.url === "/register"
      ? this.props.registerUser({ ...this.state })
      : this.props.loginUser({ ...this.state });
  };

  getFieldError = fieldName => {
    try {
      if (this.props.match.url === "/register") {
        return this.props.error.errors[fieldName].message;
      } else {
        return this.props.error.error;
      }
    } catch (e) {
      return undefined;
    }
  };

  render() {
    return (
      <>
        <h2 className='pt-4'>
          {this.props.match.url === "/register" ? "Зарегистрировать нового пользователя" : "Войти"}
        </h2>
        <form onSubmit={this.submitFormHandler}>
          <div className="form-group pt-3">
            <input
              onChange={this.inputChangeHandler}
              type="text"
              name="username"
              value={this.state.username}
              placeholder='Enter username'
              className={
                !this.props.error ? "form-control" : "form-control is-invalid"
              }
            />
            <div className={this.props.error && "invalid-feedback d-block"}>
              {this.getFieldError("username")}
            </div>
          </div>
          <div className="form-group pt-3">
            <input
              onChange={this.inputChangeHandler}
              type="password"
              name="password"
              value={this.state.password}
              placeholder='Enter password'
              className={
                !this.props.error ? "form-control" : "form-control is-invalid"
              }
            />
            <div className={this.props.error && "invalid-feedback d-block"}>
              {this.getFieldError("password")}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData)),
  loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLoginForm);
