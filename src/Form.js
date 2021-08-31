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
      statusLogin: false,
      statusEmail: false,
      statusName: false,
      statustimeZone: false,
      statushomepage: false,
      statusmytext: false,
      statusCheck: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    if (this.state.login.length === 0) {
      this.setState({ statusLogin: true });
    } else {
      this.setState({ statusLogin: false });
    }
    if (
      this.state.email.length === 0 ||
      !this.regEmail.test(this.state.email)
    ) {
      this.setState({ statusEmail: true });
      e.preventDefault();
    } else {
      this.setState({ statusEmail: false });
    }
    if (this.state.name.length === 0) {
      this.setState({ statusName: true });
      e.preventDefault();
    } else {
      this.setState({ statusName: false });
    }
    if (this.state.timeZone.length === 0) {
      this.setState({ statustimeZone: true });
      e.preventDefault();
    } else {
      this.setState({ statustimeZone: false });
    }
    if (
      this.state.homepage.length === 0 ||
      !this.regUrl.test(this.state.homepage)
    ) {
      this.setState({ statushomepage: true });
      e.preventDefault();
    } else {
      this.setState({ statushomepage: false });
    }
    if (this.state.mytext.length <= 50) {
      this.setState({ statusmytext: true });
      e.preventDefault();
    } else {
      this.setState({ statusmytext: false });
    }
    if (!this.state.check) {
      this.setState({ statusCheck: true });
      e.preventDefault();
    } else {
      this.setState({ statusCheck: false });
    }
    if (
      !(this.state.statusLogin &&
      this.state.statusEmail &&
      this.state.statusName &&
      this.state.statustimeZone &&
      this.state.statushomepage &&
      this.state.statusmytext &&
      this.statusCheck)
    )
      alert("Validate form");
  }

  handleChange(e) {
    if (e.target.name !== "check")
      this.setState({ [e.target.name]: e.target.value });
    else this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
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
            {this.state.statusLogin ? (
              <p className="error">Login field can't be empty</p>
            ) : null}
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
            {this.state.statusEmail ? (
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
            {this.state.statusName ? (
              <p className="error">name field can't be empty</p>
            ) : null}
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
            {this.state.statustimeZone ? (
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
            {this.state.statushomepage ? (
              <p className="error">
                homepage field can't be empty or url format is not correct
              </p>
            ) : null}
          </div>
          <div>About Me</div>
          <div>
            <textarea
              onChange={this.handleChange}
              value={this.state.my}
              name="mytext"
              data-name="textarea"
            ></textarea>
            {this.state.statusmytext ? (
              <p className="error">There must be more than 50 characters</p>
            ) : null}
          </div>
          <div>
            <input
              type="checkbox"
              data-name="checkbox"
              name="check"
              value={this.state.check}
              onChange={this.handleChange}
            />
            <b>Receive notification of comments.</b>
            {this.state.statusCheck ? (
              <p className="error">It must be checked</p>
            ) : null}
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
