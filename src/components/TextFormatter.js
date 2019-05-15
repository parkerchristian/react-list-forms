import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color } = this.state;
    return (
      <>
        <input name="text" value={text} type="input" onChange={this.handleChange}></input>
        <input name="color" value={color} type="color" onChange={this.handleChange}></input>
        <pre style={{ color }}>{text}</pre>
      </>
    );
  }
}
