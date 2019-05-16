import React, { PureComponent } from 'react';
import Error from './Error';
import Bad from './Bad';
import Good from './Good';

export default class App extends PureComponent {
  render() {
    return (
      <>
      <Error>
        <Bad />
      </Error>
      <Error>
        <Good />
      </Error>
      </>
    );
  }
}
