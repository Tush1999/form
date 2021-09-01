import React, { Component } from "react";
import "./style.css";

export default class Form extends Component {
  regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  regUrl =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      email: "",
      name: "",
      timeZone: "",
      homepage: "",
      mytext: "",
      check: "",
      formErrors: {},
    };
    this.initialState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormValidation() {
    const { login, email, name, timeZone, homepage, mytext, check } =
      this.state;
    let formErrors = {};
    let formIsValid = true;
    if (!login) {
      formIsValid = false;
      formErrors["login"] = "login field is required.";
    }
    if (!email) {
      formIsValid = false;
      formErrors["email"] = "Email id is required.";
    } else if (!this.regEmail.test(email)) {
      formIsValid = false;
      formErrors["email"] = "Invalid email id.";
    }

    if (!name) {
      formIsValid = false;
      formErrors["name"] = "Name field is required.";
    }

    if (!timeZone) {
      formIsValid = false;
      formErrors["timeZone"] = "Time zone field is required.";
    }

    if (!homepage) {
      formIsValid = false;
      formErrors["homepage"] = "url is required.";
    } else if (!this.regUrl.test(homepage)) {
      formIsValid = false;
      formErrors["homepage"] = "Invalid url";
    }

    if (!mytext || mytext.length < 50) {
      formIsValid = false;
      formErrors["mytext"] = "Minimum character is 50";
    }

    if (!check) {
      formIsValid = false;
      formErrors["check"] = "It must be checked";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };

  handleChange(e) {
    if (e.target.name !== "check")
      this.setState({ [e.target.name]: e.target.value });
    else this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    const { login, email, name, timeZone, homepage, mytext, check } =
      this.state.formErrors;
    return (
      <>
        <h1 className="container heading">Registration Form</h1>
        <form className="container" name="myform" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="login">Login Id</label>
            <input
              type="text"
              id="login"
              value={this.state.login}
              name="login"
              onChange={this.handleChange}
            />
            {login ? <p className="error">Login field can't be empty</p> : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            {email ? (
              <p className="error">
                email field can't be empty or email format isn't correct
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            {name ? <p className="error">name field can't be empty</p> : null}
          </div>
          <div>
            <label htmlFor="time-zone">Timezone</label>
            <input
              type="text"
              id="time-zone"
              value={this.state.timeZone}
              placeholder="GMT"
              name="timeZone"
              onChange={this.handleChange}
            />
            {timeZone ? (
              <p className="error">Timezone field can't be empty</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="homepage">Homepage</label>
            <input
              type="text"
              id="homepage"
              value={this.state.homepage}
              onChange={this.handleChange}
              name="homepage"
            />
            {homepage ? (
              <p className="error">
                homepage field can't be empty or url format is not correct
              </p>
            ) : null}
          </div>
          <div>About Me</div>
          <div>
            <textarea
              onChange={this.handleChange}
              value={this.state.mytext}
              name="mytext"
              data-name="textarea"
            ></textarea>
            {mytext ? (
              <p className="error">There must be more than 50 characters</p>
            ) : null}
          </div>
          <div>
            <div className="flex-check">
              <span class="left">
                <input
                  type="checkbox"
                  data-name="checkbox"
                  name="check"
                  value={this.state.check}
                  onChange={this.handleChange}
                />
                <b>Receive notification of comments.</b>
              </span>
              <span class="right"></span>
            </div>
            {check ? <p className="error">It must be checked</p> : null}
            <p className="para">
              You will be sent an email when someone posts comments to your Blog
              or Album
            </p>
          </div>
          <div className="text">Your password will be mailed to you</div>
          <div className="submit">
            <button>Go</button>
          </div>
        </form>
      </>
    );
  }
}
