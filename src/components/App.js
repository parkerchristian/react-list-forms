import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';
import style from './App.css';

export default class App extends PureComponent {
  state = {
    page: 'home'
  }

  handler = (page) => {
    this.setState({ page: page });
    console.log('***', page);
  }

  render() {

    const content = {
      home: 'YOURE HOME',
      food: 'food nummies',
      about: 'at about page',
      contact: 'never call',
    };
    
    return (
      <section className={style.App}>
        <Sidebar>
          <a onClick={() => this.handler('home')} href="#">HOME</a>
          <a onClick={() => this.handler('food')} href="#">FOOD</a>
          <a onClick={() => this.handler('about')} href="#">ABOUT</a>
          <a onClick={() => this.handler('contact')} href="#">CONTACT</a>
        </Sidebar>
        <p>{content[this.state.page]}</p>
      </section>
    );
  }
}
