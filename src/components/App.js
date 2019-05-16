import React, { PureComponent } from 'react';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import PhotoAlbum from './photo/PhotoAlbum.js';
import carsales from './assets/carsales.jpg';
import logo from './assets/logo.jpg';
import nikelogo3 from './assets/nikelogo3.jpg';

export default class App extends PureComponent {
  
  render() {
    const allPhotos = [
      carsales,
      logo,
      nikelogo3,
      carsales,
      logo
    ];
    return (
      <section>
        <Header />
        <PhotoAlbum photos={allPhotos}/>
        <Footer />
      </section>
    );
  }
}
