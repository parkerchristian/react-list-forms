import React, { PureComponent } from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';

export default class App extends PureComponent {
  render() {
    return (
      <>
      <Header />
      <Footer />
      </>
    );
  }
}
