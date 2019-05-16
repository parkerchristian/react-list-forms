import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';

export default class App extends PureComponent {
  render() {
    return (
      <>
      <Sidebar>
        <a href="#">HOME</a>
        <a href="#">FOOD</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </Sidebar>
      <p>Sup</p>
      </>
    );
  }
}
