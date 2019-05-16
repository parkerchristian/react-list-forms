import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';

export default class App extends PureComponent {
  state = {
    page: 'home'
  }

  handler = (event, page) => {
    console.log('***', page);
    this.setState({ page: page });
  }

  render() {

    const content = {
      home: 'YOURE HOME',
      food: 'food nummies',
      about: 'at about page',
      contact: 'never call',
    };
    return (
      <>
      <Sidebar>
        <a onClick={() => this.handler(null, 'home')} href="#">HOME</a>
        <a onClick={() => this.handler(null, 'food')} href="#">FOOD</a>
        <a onClick={() => this.handler(null, 'about')} href="#">ABOUT</a>
        <a onClick={() => this.handler(null, 'contact')} href="#">CONTACT</a>
      </Sidebar>
      <p>{content[this.state.page]}</p>
      </>
    );
  }
}
