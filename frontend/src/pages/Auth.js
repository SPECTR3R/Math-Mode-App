import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <LoginForm></LoginForm>
        <SignupForm></SignupForm>
      </div>
    );
  }
}
