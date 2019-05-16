import React, { PureComponent } from 'react';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Photo from './photo/Photo.js';
import carsales from './assets/carsales.jpg';

export default class App extends PureComponent {
  render() {
    return (
      <section>
        <Header />
        <div>
          <Photo photo={carsales}/>
          <Photo photo={carsales}/>
          <Photo photo={carsales}/>
          <Photo photo={carsales}/>
        </div>
        <Footer />
      </section>
    );
  }
}
