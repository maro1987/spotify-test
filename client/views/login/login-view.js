import React, { Component } from 'react';

export default class LoginView extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="login-view">
        <a className="login-view-login-link" href="/login"/>
      </section>
    );
  }
}
