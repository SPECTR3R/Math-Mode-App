import React from 'react';
import TestQuestion from '../components/TestQuestion';

export default class App extends React.Component {
  state = {
    value: '# Esta es una carta de prueba \n $$\n c = \\pm\\sqrt{a^2 + b^2} \n $$',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <TestQuestion/>
      </>
    );
  }
}
